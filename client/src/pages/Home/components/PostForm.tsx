import React from 'react';
import { Form } from 'react-bootstrap';
const PostForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={`What's on your mind, ${'gg'}`}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PostForm;
