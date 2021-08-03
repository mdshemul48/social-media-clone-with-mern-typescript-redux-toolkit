import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import signupFormInterface from '../../../types/signup';

const SignupForm = () => {
  const [formState, setFormState] = useState<signupFormInterface>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const signupFormHandler = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={signupFormHandler}>
      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Control
              placeholder="First name"
              name="firstName"
              onChange={inputChangeHandler}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Surname"
              name="lastName"
              onChange={inputChangeHandler}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Email address"
          name="email"
          type="email"
          onChange={inputChangeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Password"
          name="password"
          type="password"
          onChange={inputChangeHandler}
        />
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
