import { configureStore } from '@reduxjs/toolkit';

import userState from './reducers/authReducer';
import postState from './reducers/postReducer';

const store = configureStore({ reducer: { userState, postState } });

// dispatch type
export type AppDispatch = typeof store.dispatch;

// state type
export type RootState = ReturnType<AppDispatch>;

export default store;
