import http from "./http.client";
import { prepareHeaderWithToken } from "../utils/auth";
import constants from '../../config';
import Contact from "../models/contact";

export async function getContacts() {

  const requestOptions = await prepareHeaderWithToken();

  const response = await http.get(`${constants.apiUrl}/contacts/user`, requestOptions);

  return response.data;
}

export async function getContact(id: string) {

  const requestOptions = await prepareHeaderWithToken();

  const response = await http.get(`${constants.apiUrl}/contacts/${id}`, requestOptions);

  return response.data;
}

export async function addContact(contact: Contact) {

  const requestOptions = await prepareHeaderWithToken();

  const response = await http.post(`${constants.apiUrl}/contacts`, contact, requestOptions);

  return response.data;
}

export async function updateContact(contact: Contact) {

  const requestOptions = await prepareHeaderWithToken();

  let { _id, ...updateContact } = contact;

  const response = await http.patch(`${constants.apiUrl}/contacts/${_id}`, updateContact, requestOptions);

  return response === 200;
}

export async function removeContact(id: string) {

  const requestOptions = await prepareHeaderWithToken();

  const response = await http.delete(`${constants.apiUrl}/contacts/${id}`, requestOptions);

  return response === 200;
}

const ContactsService = {
  getContacts, getContact, addContact, updateContact, removeContact
}

export default ContactsService;
