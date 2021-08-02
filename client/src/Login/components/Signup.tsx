import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignupModel from './SignupModel';
const Signup = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showModalHandler = (): void => {
    setShowModal(true);
  };
  const hideModalHandler = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div className="signup d-flex justify-content-center">
        <Button variant="success" className="py-2" onClick={showModalHandler}>
          Create New Account{showModal}
        </Button>
      </div>
      <SignupModel show={showModal} onClone={hideModalHandler} />
    </>
  );
};

export default Signup;
