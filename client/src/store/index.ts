import { configureStore } from '@reduxjs/toolkit';
import userState from './reducers/authReducer';

const store = configureStore({ reducer: { userState } });

// dispatch type
export type AppDispatch = typeof store.dispatch;

// state type
export type RootState = ReturnType<AppDispatch>;

export default store;
