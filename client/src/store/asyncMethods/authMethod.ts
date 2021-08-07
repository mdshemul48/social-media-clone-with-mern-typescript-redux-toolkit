import { setUser, setError } from '../reducers/authReducer';
// type interface
import errorInterface from '../../types/errorInterface';
import { AppDispatch } from '../index';
import { loginInterface } from '../../types/login';

import axios from '../../config/axios';

export const signup = (formData: FormData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post<{ token: string }>('/signup', formData);
      dispatch(setUser(data.token));
    } catch (err) {
      const errorResponse = err as errorInterface;
      const errors = errorResponse.response.data.errors;
      dispatch(setError(errors));
    }
  };
};

export const login = (formData: loginInterface) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post<{ token: string }>('/login', formData);
      dispatch(setUser(data.token));
    } catch (err: any) {
      const errorResponse = err as errorInterface;
      const errors = errorResponse.response.data.errors;
      dispatch(setError(errors));
    }
  };
};
