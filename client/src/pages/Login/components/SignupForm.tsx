import { Button, Form, Row, Col } from 'react-bootstrap';

const SignupForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Surname" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Email address" type="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Password" type="password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <p className="terms-message">
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </p>
      </Form.Group>
      <Form.Group className="text-center">
        <Button variant="success" className="w-50" type="submit">
          Sign Up
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SignupForm;
