import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2}>this is home</Col>
        <Col lg={8}>this is home</Col>
        <Col lg={2}>this is home</Col>
      </Row>
    </Container>
  );
};

export default Home;
