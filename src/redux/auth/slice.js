import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from './actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.playload.user;
      state.token = action.playload.token;
      state.isLoggedIn = true;
    },
    [signIn.fulfilled](state, action) {
      state.user = action.playload.user;
      state.token = action.playload.token;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
