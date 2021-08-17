export interface SignupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
  posts: [];
}
export interface UserInterface extends SignupInterface {
  _id: string;
}
