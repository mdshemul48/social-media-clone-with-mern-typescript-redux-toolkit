import axios from '../../config/axios';

import { stateInterface } from '../../types/stateInterface';
import { post } from '../../types/postInterface';
import { AppDispatch } from '../index';

import {
  setPost,
  setErrors,
  clearErrors,
  redirect,
  setPosts,
  setPostLike
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

export const like = (postId: string) => {
  return async (dispatch: AppDispatch, getState: () => stateInterface) => {
    const { userState } = getState();
    const { token, user } = userState;
    if (!token) {
      return dispatch(setErrors([{ msg: 'token not found' }]));
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const { data } = await axios.put<{ msg: string; post: post }>(
        `/posts/like/${postId}`,
        null,
        config
      );

      console.log(data);
      dispatch(setPostLike({ postId: postId, userId: user!._id }));
    } catch (error: any) {
      console.log(error.response);
    }
  };
};
