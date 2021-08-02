import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// interface (type)
import { signupModel } from '../../types/login';

const SignupModel: React.FC<signupModel> = (props) => {
  const { show, onClone } = props;
  return (
    <Modal show={show} onHide={onClone}>
      <h1>hello world</h1>
    </Modal>
  );
};

export default SignupModel;
