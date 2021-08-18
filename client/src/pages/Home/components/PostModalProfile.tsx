import React from 'react';
import { useSelector } from 'react-redux';
import { GiEarthAmerica } from 'react-icons/gi';
import { UserReducer } from '../../../types/userReducer';

const PostModalProfile = () => {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  return (
    <div className="d-flex mb-2">
      <div>
        <img
          src={
            process.env.REACT_APP_BACKEND_API_LINK +
            `/public/${user?.profileImage}`
          }
          width="45px"
          height="45px"
          className="rounded-circle"
          alt=""
        />
      </div>
      <div className="ms-2">
        <span className="d-block">
          {user?.firstName} {user?.lastName}
        </span>
        <span className="public-bg text-dark px-2 rounded fw-normal">
          <GiEarthAmerica /> Public
        </span>
      </div>
    </div>
  );
};

export default PostModalProfile;
