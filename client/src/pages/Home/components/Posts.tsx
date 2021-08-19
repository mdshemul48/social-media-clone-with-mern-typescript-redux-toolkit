import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

// types
import { stateInterface } from '../../../types/stateInterface';

const Posts = () => {
  const { posts } = useSelector((state: stateInterface) => state.postState);

  return (
    <div className="mt-3">
      {posts.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </div>
  );
};

export default Posts;
