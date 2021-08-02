import { Row, Col, Container } from 'react-bootstrap';

// components
import FacebookIntro from './components/FacebookIntro';
import LoginSection from './components/LoginSection';
const Login = () => {
  return (
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
  );
};

export default Login;
