export interface postInterface {
  body: string;
  image: File | undefined;
  imagePreview: string | undefined;
}

export interface post {
  _id: string;
  user: string;
  body: string;
  image: string;
  likes: string[];
  comments: { comment: string; userId: string }[];
}

export interface postsState {
  errors: { msg: string }[];
  redirect: boolean;
  posts: post[];
  loading: boolean;
}
