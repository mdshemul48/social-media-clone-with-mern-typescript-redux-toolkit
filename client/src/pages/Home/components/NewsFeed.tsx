import { Container } from 'react-bootstrap';

import PostCreate from './PostCreate';
const NewsFeed = () => {
  return (
    <Container fluid className="w-50 mx-auto">
      <PostCreate />
    </Container>
  );
};

export default NewsFeed;
