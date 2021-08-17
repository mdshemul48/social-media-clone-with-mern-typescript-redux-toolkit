import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { UserReducer } from '../../../types/userReducer';

const PostForm = () => {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={`What's on your mind, ${user?.firstName}`}
        />
      </Form.Group>
    </Form>
  );
};

export default PostForm;
