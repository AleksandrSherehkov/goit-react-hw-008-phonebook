import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62fd26bfb9e38585cd4da3e5.mockapi.io',
});

export const getContacts = () => instance.get('/contacts');

export const addContact = contact => instance.post('/contacts', contact);

export const deleteContact = contactId => instance.delete(`/contacts/${contactId}`);
