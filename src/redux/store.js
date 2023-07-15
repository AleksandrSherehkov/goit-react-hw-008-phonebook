import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contact/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
