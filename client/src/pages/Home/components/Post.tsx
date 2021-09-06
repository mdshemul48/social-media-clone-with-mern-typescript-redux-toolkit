import React from 'react';
import moment from 'moment';
//component
import PostProfile from './PostProfile';

// icons
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';

// assets
import likeImage from '../../../assets/like.svg';

// types
import { post } from '../../../types/postInterface';

const Post: React.FC<{ post: post }> = (props) => {
  const {
    body,
    image,
    likes,
    comments,
    createdAt,
    user: { firstName, lastName, profileImage }
  } = props.post;

  const createdTime = moment(createdAt).fromNow();

  return (
    <div className="bg-light shadow-sm rounded mb-2">
      <PostProfile
        firstName={firstName}
        lastName={lastName}
        profileImage={profileImage}
        postCreatedTime={createdTime}
      />
      <p className="mx-2 my-1">{body}</p>
      {image && (
        <div>
          <img
            className="w-100 h-auto"
            src={process.env.REACT_APP_BACKEND_API_LINK + '/public/' + image}
            alt=""
          />
        </div>
      )}

      {comments.length > 0 || (likes.length > 0 && <hr className="my-1" />)}
      <div className="mx-2">
        <div className="d-flex justify-content-between">
          <div>
            {likes.length > 0 && (
              <>
                <img src={likeImage} width="16" alt="" />
                <span>{likes.length} Likes</span>
              </>
            )}
          </div>
          {comments.length > 0 && <span>{comments.length} Comment</span>}
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
