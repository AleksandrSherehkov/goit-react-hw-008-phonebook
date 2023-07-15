import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from 'service/requests/contactsApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', credentials);

      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('/users/login', credentials);

    setToken(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('/users/logout');

    clearToken();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    console.log(persistedToken);
    setToken(persistedToken);
    try {
      const { data } = await instance.get('/users/current');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
