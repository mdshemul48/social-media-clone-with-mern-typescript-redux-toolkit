import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { login } from '../../../store/asyncMethods/authMethod';
const LoginForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((PrevState) => ({ ...PrevState, [name]: value }));
  };
  const loginSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    dispatch(login(formState));
  };

  return (
    <Form onSubmit={loginSubmitHandler}>
      <Form.Group className="mb-2">
        <Form.Control
          onChange={inputChangeHandler}
          value={formState.email}
          name="email"
          placeholder="Email Address"
          type="email"
          className="py-2"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          onChange={inputChangeHandler}
          value={formState.password}
          name="password"
          placeholder="Password"
          type="password"
          className="py-2"
        />
      </Form.Group>
      <Form.Group className="d-grid mb-2">
        <Button variant="primary" size="lg" type="submit">
          Log In
        </Button>
      </Form.Group>
    </Form>
  );
};

export default LoginForm;
