import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, getContacts } from 'service/requests/contactsApi';
import { addContact } from './contactsSlice';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addContact(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContact(contactId);

      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
