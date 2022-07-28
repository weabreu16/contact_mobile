import http from './http.client';
import { storeData, removeData } from './store.manager';
import constants from '../../config';

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

const UserService = { login, signup, logout };

export default UserService;
