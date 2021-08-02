import { user } from './user';
export interface UserReducer {
  token: string | undefined;
  user: user | undefined;
  errors: {
    msg: string;
  }[];
  loading: boolean;
}
