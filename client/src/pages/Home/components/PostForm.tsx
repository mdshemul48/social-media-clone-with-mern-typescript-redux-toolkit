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
      </Form>
    </div>
  );
};

export default PostForm;
