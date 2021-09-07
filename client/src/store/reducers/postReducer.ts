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
    state.posts.unshift(post);
    return state;
  },
  setErrors(state: postsState, action: PayloadAction<{ msg: string }[]>) {
    state.errors = action.payload;
    return state;
  },
  clearErrors(state: postsState) {
    state.errors = [];
    return state;
  },
  redirect(state: postsState) {
    state.redirect = true;
    return state;
  },
  resetRedirect(state: postsState) {
    state.redirect = false;
    return state;
  },

  setPostLike(
    state: postsState,
    action: { payload: { userId: string; postId: string } }
  ) {
    const { userId, postId } = action.payload;
    const postIndex = state.posts.findIndex((post) => post._id === postId);
    const likeIndex = state.posts[postIndex].likes.indexOf(userId);
    if (likeIndex !== -1) {
      state.posts[postIndex].likes.splice(likeIndex, 1);
    } else {
      state.posts[postIndex].likes.push(userId);
    }
    return state;
  }
};

const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers
});

export default postSlice.reducer;

export const {
  setPost,
  setPosts,
  setErrors,
  clearErrors,
  redirect,
  resetRedirect,
  setPostLike
} = postSlice.actions;
