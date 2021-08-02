import { configureStore } from '@reduxjs/toolkit';
import userState from './reducers/user';

export default configureStore({ reducer: { userState } });
