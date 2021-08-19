import { postsState } from './postInterface';
import { UserReducer } from './userReducer';
export interface stateInterface {
  postState: postsState;
  userState: UserReducer;
}
