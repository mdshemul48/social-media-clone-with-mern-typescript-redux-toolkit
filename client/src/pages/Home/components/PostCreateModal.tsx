import React from 'react';
import { Modal } from 'react-bootstrap';

import PostForm from './PostForm';

const PostCreateModal: React.FC<{ show: boolean; onHide: () => void }> = (
  props
) => {
  const { show, onHide } = props;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="h6">Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm />
      </Modal.Body>
    </Modal>
  );
};

export default PostCreateModal;
