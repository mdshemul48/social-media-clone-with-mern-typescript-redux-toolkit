import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { UserReducer } from '../../../types/userReducer';
import PostModalProfile from './PostModalProfile';

import ImageUploadIcon from '../../../assets/image-icon.png';
const PostForm = () => {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );

  const [formState, setFormData] = useState({
    body: '',
    image: undefined
  });

  const [hidePostButton, setHidePostButton] = useState(true);

  const imageChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {};
  const bodyChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const bodyValue = event.target.value;
    setFormData((prevState) => ({ ...prevState, body: bodyValue }));
    if (formState.body.length > 0) {
      console.log(hidePostButton);

      setHidePostButton(false);
    }
  };
  return (
    <div className="post-form">
      <PostModalProfile />
      <Form>
        <Form.Group>
          <textarea
            className="w-100"
            rows={4}
            placeholder={`What's on your mind, ${user?.firstName}.?`}
            name="body"
            onChange={bodyChangeHandler}
          />
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
  );
};

export default PostForm;
