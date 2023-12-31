import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, fetchContactsThunk } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: '',
  filter: '',
};
const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
const pending = state => {
  state.loading = true;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.loading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
      })

      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
