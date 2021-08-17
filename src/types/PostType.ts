export default interface PostInterface {
  user: string;
  body: string;
  image: string;
  likes: string[];
  comments: { comment: string; userId: string }[];
  // eslint-disable-next-line semi
}
