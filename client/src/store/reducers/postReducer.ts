import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postsState } from '../../types/postInterface';
const initialState: postsState = {
  errors: [],
  redirect: false,
  posts: [],
  loading: false
};

const reducers = {
  setPost(state: postsState, action: PayloadAction) {
    return state;
  }
};

const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers
});

export default postSlice.reducer;

export const { setPost } = postSlice.actions;
