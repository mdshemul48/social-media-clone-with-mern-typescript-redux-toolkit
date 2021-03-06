export default interface signupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string | Blob;
  imagePreview: string | ArrayBuffer | null;
}
