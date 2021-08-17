import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { UserReducer } from '../../../types/userReducer';

import PostModalProfile from './PostModalProfile';
const PostForm = () => {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  return (
    <div className="post-form">
      <PostModalProfile />
      <Form>
        <Form.Group>
          <textarea
            className="w-100"
            rows={4}
            placeholder={`What's on your mind, ${user?.firstName}.?`}
          />
        </Form.Group>
        <Form.Group>
          <div className="bg-light border rounded px-2 py-2 d-flex">
            <div>
              <span>Add To Your Post</span>
            </div>
            <div>
              <label htmlFor="image-upload">
                <img src="" alt="" />
              </label>
              <Form.Control className="d-none" id="image-upload" />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default PostForm;
