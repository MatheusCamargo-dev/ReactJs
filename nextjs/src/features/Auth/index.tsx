'use client';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

interface AuthState {
  isAuthenticated: boolean;
}
const initialState: AuthState = {
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthenticated: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { setAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
