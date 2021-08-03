import { setUser, removeUser, setError, clearError } from '../reducers/user';

// type interface
import signupInterface from '../../types/signup';
import { AppDispatch } from '../index';

import axios from '../../config/axios';
export const signup = (formData: signupInterface) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post<{ token: string }>('/signup', formData);
      console.log(data);
      dispatch(setUser(data.token));
    } catch (error: any) {
      console.log(error.response);
    }
  };
};
