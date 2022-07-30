import { getData } from "../services/store.manager";

export async function prepareHeaderWithToken() {

  const accessToken = await getData('@access_token');


  return { headers: { "Authorization": `Bearer ${accessToken}` } };
}
