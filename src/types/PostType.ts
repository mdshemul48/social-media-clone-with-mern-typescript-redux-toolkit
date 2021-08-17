export default interface PostInterface {
  user: string;
  body: string;
  image: string;
  likes: string[];
  comments: { comment: string; userId: string }[];
  save: () => void;
  // eslint-disable-next-line semi
}
