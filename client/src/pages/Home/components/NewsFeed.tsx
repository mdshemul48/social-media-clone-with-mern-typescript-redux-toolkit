import { Container } from 'react-bootstrap';

import PostCreate from './PostCreate';
import Posts from './Posts';
const NewsFeed = () => {
  return (
    <Container fluid className="w-50 mx-auto">
      <PostCreate />
      <Posts />
    </Container>
  );
};

export default NewsFeed;
