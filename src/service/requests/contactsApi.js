import axios from 'axios';

//https://connections-api.herokuapp.com/

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = () => instance.get('/contacts');

export const addContact = contact => instance.post('/contacts', contact);

export const deleteContact = contactId => instance.delete(`/contacts/${contactId}`);

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};
