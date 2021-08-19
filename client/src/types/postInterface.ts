export interface postForm {
  body: string;
  image: File | undefined;
}

export interface postInterface extends postForm {
  imagePreview: string | undefined;
}

export interface post {
  _id: string;
  body: string;
  image: string | undefined;
  likes: string[];
  comments: { comment: string; userId: string }[];
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
}

export interface postsState {
  errors: { msg: string }[];
  redirect: boolean;
  posts: post[];
  loading: boolean;
}
