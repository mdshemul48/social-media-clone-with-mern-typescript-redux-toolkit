import axios from '../../config/axios';

import { stateInterface } from '../../types/stateInterface';
import { post } from '../../types/postInterface';
import { AppDispatch } from '../index';

import {
  setPost,
  setErrors,
  clearErrors,
  redirect,
  setPosts
} from '../reducers/postReducer';

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
      dispatch(clearErrors());
      dispatch(redirect());
    } catch (error: any) {
      const {
        data: { errors }
      } = error?.response;
      dispatch(setErrors(errors));
    }
  };
};

export const fetchAllPosts = () => {
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

      const { data }: { data: { posts: post[] } } = await axios.get(
        '/posts',
        config
      );
      dispatch(setPosts(data.posts));
      dispatch(clearErrors());
    } catch (error: any) {
      const {
        data: { errors }
      } = error?.response;
      dispatch(setErrors(errors));
    }
  };
};

export const like = (post_id: string) => {
  return (dispatch: AppDispatch, getState: () => stateInterface) => {
    const { userState } = getState();
    const { token } = userState;
    if (!token) {
      dispatch(setErrors([{ msg: 'token not found' }]));
    }
  };
};
