import { useEffect } from 'react';

import { Toaster, toast } from 'react-hot-toast';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

// type
import { UserReducer } from '../../types/userReducer';
// components
import FacebookIntro from './components/FacebookIntro';
import LoginSection from './components/LoginSection';
const Login = () => {
  const { errors } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );

  useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error.msg));
    }
  }, [errors]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Container className="mt-lg-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <FacebookIntro />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <LoginSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
