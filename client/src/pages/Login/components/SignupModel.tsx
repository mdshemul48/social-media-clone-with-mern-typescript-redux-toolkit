import React from 'react';
import { Modal } from 'react-bootstrap';
// interface (type)
import { signupModel } from '../../../types/login';

// component
import SignupForm from './SignupForm';
const SignupModel: React.FC<signupModel> = (props) => {
  const { show, onClone } = props;
  return (
    <Modal show={show} onHide={onClone}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignupForm />
      </Modal.Body>
    </Modal>
  );
};

export default SignupModel;
