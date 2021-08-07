import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// component
import NewsFeed from './components/NewsFeed';
const Home = () => {
  return (
    <Container fluid className="mt-2">
      <Row>
        <Col lg={2}>this is home</Col>
        <Col lg={8}>
          <NewsFeed />
        </Col>
        <Col lg={2}>this is home</Col>
      </Row>
    </Container>
  );
};

export default Home;
