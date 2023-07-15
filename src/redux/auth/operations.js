import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'service/requests/contactsApi';

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/signup', credentials);
    // After successful registration, add the token to the HTTP header
    //setAuthHeader(res.data.token);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
