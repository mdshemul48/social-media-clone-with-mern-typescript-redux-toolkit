import axios from '../../config/axios';

import { postForm } from '../../types/postInterface';
import { stateInterface } from '../../types/stateInterface';
import { post } from '../../types/postInterface';
import { AppDispatch } from '../index';

import { setPost } from '../reducers/postReducer';

export const createPost = (formState: postForm) => {
  return async (dispatch: AppDispatch, state: stateInterface) => {
    const {
      userState: { token }
    } = state;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const { data }: { data: { msg: string; post: post } } = await axios.post(
        '/post',
        formState,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
