import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserReducer } from '../../types/userReducer';

const initialState: UserReducer = {
  token: undefined,
  user: undefined,
  errors: []
};

const reducers = {
  setUser(state: UserReducer, action: PayloadAction) {
    return state;
  },
  removeUser(state: UserReducer) {
    return state;
  },
  setError(state: UserReducer, action: PayloadAction) {
    return state;
  },
  clearError(state: UserReducer) {
    return state;
  }
};
export const userSlice = createSlice({ initialState, reducers, name: 'user' });
