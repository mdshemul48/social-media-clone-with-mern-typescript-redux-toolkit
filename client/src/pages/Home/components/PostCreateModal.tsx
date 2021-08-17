import React from 'react';
import { Modal } from 'react-bootstrap';

const PostCreateModal: React.FC<{ show: boolean; onHide: () => void }> = (
  props
) => {
  const { show, onHide } = props;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>hello world</h1>
      </Modal.Body>
    </Modal>
  );
};

export default PostCreateModal;
