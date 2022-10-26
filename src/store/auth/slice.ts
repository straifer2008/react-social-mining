import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthState,
} from '../../types';

const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    changeAuthenticationState: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    }
  },
});

export const { changeAuthenticationState } = slice.actions;

export default slice.reducer;
