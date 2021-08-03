import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import decodeJwt from '../../util/decodeJwt';
import { UserReducer } from '../../types/userReducer';

import { errorMessageInterface } from '../../types/errorInterface';

const initialState: UserReducer = {
  token: undefined,
  user: undefined,
  errors: [],
  loading: false
};

// reading token from local storage and adding to initial state
const token = localStorage.getItem('token');
if (token) {
  const decodedInfo = decodeJwt(token);
  initialState.user = decodedInfo;
  initialState.token = token;
}

const reducers = {
  setUser(state: UserReducer, action: PayloadAction<string>) {
    const token = action.payload;
    const decodedInfo = decodeJwt(token);
    if (!decodedInfo) {
      state.errors.push({ msg: 'Invalid token.' });
      return state;
    }
    state.user = decodedInfo;
    state.token = token;
    localStorage.setItem('token', token);
    return state;
  },

  removeUser(state: UserReducer) {
    return state;
  },

  setError(state: UserReducer, action: PayloadAction<errorMessageInterface[]>) {
    const errors = action.payload;
    state.errors = errors;
    return state;
  },

  clearError(state: UserReducer) {
    return state;
  }
};
export const userSlice = createSlice({ initialState, reducers, name: 'user' });

export const { setUser, removeUser, setError, clearError } = userSlice.actions;

export default userSlice.reducer;
