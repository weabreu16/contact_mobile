import http from './http.client';
import { storeData, removeData } from './store.manager';
import constants from '../../config';
import { prepareHeaderWithToken } from "../utils/auth";

export async function login(username: string, password: string) {

  let response = await http.post(`${constants.apiUrl}/auth/login`, { username, password });

  await storeData('@access_token', response.data.access_token);
}

export async function signup(username: string, password: string) {

  let response = await http.post(`${constants.apiUrl}/users`, { username, password });

  return response.statusCode === 201;
}

export async function logout() {
  await removeData('@access_token');
}

export async function getUserData() {

  const requestOptions = await prepareHeaderWithToken();

  let response = await http.get(`${constants.apiUrl}/users/data`, requestOptions);

  return response.data;
}

const UserService = { login, signup, logout, getUserData };

export default UserService;
