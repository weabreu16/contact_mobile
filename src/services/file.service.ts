import http from './http.client';
import { prepareHeaderWithToken } from '../utils/auth';
import constants from '../../config';

interface AppFile {
  uri: string
  name: string
  type: string
}

export async function getFile(id: string) {


  const response = await http.get(`${constants.apiUrl}/files/${id}`);

  return response.data;
}

export async function uploadFile(file: AppFile) {
  try {
    const form = new FormData();
    const newImageUri = "file:///" + file.uri.split("file:/").join("");
    form.append('file', {
      uri: newImageUri,
      type: file.type,
      name: newImageUri.split('/').pop()
    } as unknown as Blob);


    const response = await http.post(`${constants.apiUrl}/files`, form);

    return response.data;
  } catch (e) {
    console.log((e as Error).message);
  }
}

export async function deleteFile(id: string) {

  const requestOptions = prepareHeaderWithToken();

  const response = await http.remove(`${constants.apiUrl}/files/${id}`, requestOptions);

  return response.data;
}

export async function replaceFile(id: string, file: AppFile) {

  await deleteFile(id);

  const uploadedFile = await uploadFile(file);

  return uploadedFile;
}

const FileService = { getFile, uploadFile, deleteFile, replaceFile };

export default FileService;
