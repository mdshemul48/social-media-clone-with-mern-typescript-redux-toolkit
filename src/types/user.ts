export interface SignupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
  posts: string[];
}
export interface UserInterface extends SignupInterface {
  _id: string;
  save: () => void;
}
