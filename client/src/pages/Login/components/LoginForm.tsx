import { Form, Button } from 'react-bootstrap';
const LoginForm = () => {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Control
          placeholder="Email Address"
          type="email"
          className="py-2"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control placeholder="Password" type="password" className="py-2" />
      </Form.Group>
      <Form.Group className="d-grid mb-2">
        <Button variant="primary" size="lg">
          Log In
        </Button>
      </Form.Group>
    </Form>
  );
};

export default LoginForm;
