import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';

// async methods
import { createPost } from '../../../store/asyncMethods/postMethod';
// types
import { UserReducer } from '../../../types/userReducer';
import { postsState } from '../../../types/postInterface';
import { postInterface } from '../../../types/postInterface';

// components
import PostModalProfile from './PostModalProfile';

// assets
import ImageUploadIcon from '../../../assets/image-icon.png';
const PostForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );

  const { errors } = useSelector(
    (state: { postState: postsState }) => state.postState
  );

  const [formState, setFormData] = useState<postInterface>({
    body: '',
    image: undefined,
    imagePreview: undefined
  });

  const [hidePostButton, setHidePostButton] = useState(true);

  const imageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = event.target.files[0];

      const fileReader = new FileReader();

      fileReader.onloadend = (event: ProgressEvent<FileReader>) => {
        const imageUrl = event.target?.result;
        if (imageUrl && typeof imageUrl === 'string') {
          setFormData((prevState) => ({
            ...prevState,
            image,
            imagePreview: imageUrl
          }));
        }
      };
      fileReader.readAsDataURL(image);
    }
  };
  const bodyChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const bodyValue = event.target.value;
    setFormData((prevState) => ({ ...prevState, body: bodyValue }));
    if (formState.body.length > 0) {
      setHidePostButton(false);
    }
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const { body, image } = formState;

    const form = new FormData();
    form.append('body', body);
    form.append('image', image!);

    dispatch(createPost(form));
  };

  useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error.msg));
    }
  }, [errors]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="post-form">
        <PostModalProfile />
        <Form onSubmit={submitFormHandler}>
          <Form.Group>
            <textarea
              className="w-100"
              rows={3}
              placeholder={`What's on your mind, ${user?.firstName}.?`}
              name="body"
              onChange={bodyChangeHandler}
            />
          </Form.Group>
          <Form.Group className="my-3">
            {formState.imagePreview && (
              <img className="img-fluid" src={formState.imagePreview} alt="" />
            )}
          </Form.Group>

          <Form.Group>
            <div className="border rounded px-2 py-2 d-flex justify-content-between px-3">
              <div>
                <span>Add To Your Post</span>
              </div>
              <div>
                <label
                  htmlFor="image-upload"
                  className="pointer-event"
                  role="button"
                >
                  <img src={ImageUploadIcon} alt="" />
                  <Form.Control
                    onChange={imageChangeHandler}
                    type="file"
                    className="d-none"
                    id="image-upload"
                    name="image"
                  />
                </label>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="my-2 d-grid">
            <Button type="submit" disabled={hidePostButton}>
              Post
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default PostForm;
