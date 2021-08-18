import { postsState } from './postInterface';
import { UserReducer } from './userReducer';
export interface stateInterface {
  postsState: postsState;
  userState: UserReducer;
}
