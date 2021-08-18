import { postsState } from './postInterface';
import { UserReducer } from './userReducer';
export interface state {
  postsState: postsState;
  userState: UserReducer;
}
