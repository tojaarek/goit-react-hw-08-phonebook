import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'AUTH/REGISTER',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      toast.error('This email address is already registered', {
        position: toast.POSITION.TOP_CENTER,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'AUTH/LOGIN',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      toast.error('The email address or password is incorrect.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('AUTH/LOGOUT', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'AUTH/REFRESH_USER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
