import React from 'react';
import { useSelector } from 'react-redux';

import { UserReducer } from '../../../types/userReducer';

const PostModalProfile = () => {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );
  console.log(user);

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
        <span className="public-bg text-white px-2 rounded">Public</span>
      </div>
    </div>
  );
};

export default PostModalProfile;
