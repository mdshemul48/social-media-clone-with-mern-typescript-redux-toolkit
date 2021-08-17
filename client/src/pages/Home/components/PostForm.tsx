import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { UserReducer } from '../../../types/userReducer';

import PostModalProfile from './PostModalProfile';
const PostForm = () => {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  return (
    <>
      <PostModalProfile />
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={`What's on your mind, ${user?.firstName}`}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default PostForm;
