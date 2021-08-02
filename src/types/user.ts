export interface SignupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface UserInterface extends SignupInterface{
  _id: string
}
