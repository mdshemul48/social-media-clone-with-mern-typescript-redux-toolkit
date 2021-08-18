import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { post } from '../../types/postInterface';
import { postsState } from '../../types/postInterface';
const initialState: postsState = {
  errors: [],
  redirect: false,
  posts: [],
  loading: false
};

const reducers = {
  setPosts(state: postsState, action: PayloadAction<post[]>) {
    const posts = action.payload;
    state.posts = posts;
    return state;
  },
  setPost(state: postsState, action: PayloadAction<post>) {
    const post = action.payload;
    state.posts.push(post);
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
