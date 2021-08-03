import { setUser, removeUser, setError } from '../reducers/authReducer';
import { AxiosError } from 'axios';
// type interface
import errorInterface from '../../types/errorInterface';
import signupInterface from '../../types/signup';
import { AppDispatch } from '../index';

import axios from '../../config/axios';
export const signup = (formData: signupInterface) => {
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
