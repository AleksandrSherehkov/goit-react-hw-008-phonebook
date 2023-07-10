import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: '',
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const pending = (state, action) => {
  state.loading = true;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        state.loading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
