import axios from 'axios';

interface HTTPResponse {
  data: any
  statusCode: number
};

export async function get(url: string, requestOptions: any = undefined): Promise<HTTPResponse> {

  const response = await axios.get(url, requestOptions);

  return { data: response.data, statusCode: response.status }
}

export async function post(url: string, data: any, requestOptions: any = undefined): Promise<HTTPResponse> {

  const response = await axios.post(url, data, requestOptions);

  return { data: response.data, statusCode: response.status }
}

export async function patch(url: string, data: any, requestOptions: any = undefined): Promise<HTTPResponse> {

  const response = await axios.patch(url, data, requestOptions);

  return { data: response.data, statusCode: response.status }
}

export async function remove(url: string, requestOptions: any = undefined): Promise<HTTPResponse> {

  const response = await axios.delete(url, requestOptions);

  return { data: response.data, statusCode: response.status }
}

export default const http = { get, post, patch, delete: remove };
