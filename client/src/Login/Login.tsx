import { Row, Col, Container } from 'react-bootstrap';

import FacebookIntro from './components/FacebookIntro';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <FacebookIntro />
        </Col>
        <Col lg={6} md={6} sm={12}>
          g
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
