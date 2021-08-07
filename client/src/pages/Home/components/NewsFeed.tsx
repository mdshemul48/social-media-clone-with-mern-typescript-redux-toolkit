import { Container } from 'react-bootstrap';

import PostCreator from './PostCreator';
const NewsFeed = () => {
  return (
    <Container fluid className="w-50 mx-auto">
      <PostCreator />
    </Container>
  );
};

export default NewsFeed;
