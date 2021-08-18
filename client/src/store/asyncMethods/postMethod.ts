import axios from '../../config/axios';

import { stateInterface } from '../../types/stateInterface';
import { post } from '../../types/postInterface';
import { AppDispatch } from '../index';

import { setPost, setErrors } from '../reducers/postReducer';

export const createPost = (formState: FormData) => {
  return async (dispatch: AppDispatch, getState: () => stateInterface) => {
    try {
      const {
        userState: { token }
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const { data }: { data: { msg: string; post: post } } = await axios.post(
        '/posts',
        formState,
        config
      );
      dispatch(setPost(data.post));
    } catch (error: any) {
      const { errors } = error?.response;
      dispatch(setErrors(errors));
    }
  };
};
