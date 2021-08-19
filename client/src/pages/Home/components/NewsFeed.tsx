import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// components
import PostCreate from './PostCreate';
import Posts from './Posts';

// async methods
import { fetchAllPosts } from '../../../store/asyncMethods/postMethod';

const NewsFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <Container fluid className="w-50 mx-auto">
      <PostCreate />
      <Posts />
    </Container>
  );
};

export default NewsFeed;
