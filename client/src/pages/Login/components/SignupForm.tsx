import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import signupFormInterface from '../../../types/signup';

import { signup } from '../../../store/asyncMethods/authMethod';

const SignupForm = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState<signupFormInterface>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    image: '',
    imagePreview: ''
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

    const form = new FormData();
    form.append('firstName', formState.firstName);
    form.append('lastName', formState.lastName);
    form.append('email', formState.email);
    form.append('password', formState.password);
    form.append('image', formState.image);

    dispatch(signup(form));
  };

  const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target!.files!;
    if (files!.length !== 0) {
      const imageReader = new FileReader();
      imageReader.onloadend = () => {
        setFormState((prevState) => ({
          ...prevState,
          imagePreview: imageReader.result
        }));
      };
      imageReader.readAsDataURL(files[0]);
      setFormState((prevState) => ({ ...prevState, image: files[0] }));
    }
  };

  return (
    <Form onSubmit={signupFormHandler}>
      {formState.imagePreview && (
        <Form.Group className="mb-3 d-flex justify-content-center">
          {typeof formState.imagePreview === 'string' && (
            <img
              src={formState.imagePreview}
              width="150px"
              height="150px"
              className="rounded-circle"
              alt="gg"
            />
          )}
        </Form.Group>
      )}
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
        <Form.Control name="image" onChange={fileHandler} type="file" />
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
