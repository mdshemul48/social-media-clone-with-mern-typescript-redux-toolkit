import { useState, ChangeEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((PrevState) => ({ ...PrevState, [name]: value }));
  };

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Control
          onChange={inputChangeHandler}
          placeholder="Email Address"
          type="email"
          className="py-2"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          onChange={inputChangeHandler}
          placeholder="Password"
          type="password"
          className="py-2"
        />
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
