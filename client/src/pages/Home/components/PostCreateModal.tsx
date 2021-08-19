import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// reducers
import { resetRedirect } from '../../../store/reducers/postReducer';
// types
import { postsState } from '../../../types/postInterface';
// component
import PostForm from './PostForm';

const PostCreateModal: React.FC<{ show: boolean; onHide: () => void }> = (
  props
) => {
  const dispatch = useDispatch();
  const { redirect } = useSelector(
    (state: { postState: postsState }) => state.postState
  );
  const { show, onHide } = props;

  useEffect(() => {
    if (redirect) {
      onHide();
      dispatch(resetRedirect());
    }
  }, [redirect, onHide, dispatch]);
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
