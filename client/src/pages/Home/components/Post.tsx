import PostProfile from './PostProfile';

// icons
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
// assets
import likeImage from '../../../assets/like.svg';
const Post = () => {
  return (
    <div className="bg-light shadow-sm rounded mb-2">
      <PostProfile />
      <p className="mx-2 my-1">hello world this is good.</p>
      <div>
        <img
          className="img-fluid"
          src="http://localhost:5000/public/96257fa5-9de1-46c1-828c-e93a712ce8b2.jpeg"
          alt=""
        />
      </div>

      <hr className="my-1" />
      <div className="mx-2">
        <div className="d-flex justify-content-between">
          <div>
            <img src={likeImage} width="16" alt="" />{' '}
            <span>you, and 500 others</span>
          </div>
          <span>4 comments</span>
        </div>
        <hr className="my-1" />
        <div className="d-flex justify-content-around py-1">
          <span
            role="button"
            className="d-flex align-items-center text-secondary"
          >
            <AiOutlineLike className="me-1" /> Like
          </span>
          <span
            role="button"
            className="d-flex align-items-center text-secondary"
          >
            <FaRegCommentAlt className="me-1" /> Comment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
