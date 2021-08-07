export interface SignupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
}
export interface UserInterface extends SignupInterface {
  _id: string;
}
