import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62fd26bfb9e38585cd4da3e5.mockapi.io',
});

export const getContacts = () => api.get('/contacts');

export const addContact = contact => api.post('/contacts', contact);

export const deleteContact = contactId => api.delete(`/contacts/${contactId}`);
