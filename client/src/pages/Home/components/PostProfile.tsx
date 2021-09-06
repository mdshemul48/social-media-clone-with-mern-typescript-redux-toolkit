import React from 'react';

import { GiEarthAmerica } from 'react-icons/gi';

interface postProfile {
  firstName: string;
  lastName: string;
  profileImage: string;
  postCreatedTime: string;
}

const PostProfile: React.FC<postProfile> = (props) => {
  const { firstName, lastName, profileImage, postCreatedTime } = props;
  return (
    <div>
      <div className="d-flex px-2 pt-2">
        <div className="mt-1">
          <img
            width="40px"
            src={
              process.env.REACT_APP_BACKEND_API_LINK + '/public/' + profileImage
            }
            alt=""
            className="rounded-circle"
          />
        </div>
        <div className="ms-2">
          <span className="d-block">
            {firstName} {lastName}
          </span>
          <span className="text-dark post-day me-2">{postCreatedTime}</span>
          <span>
            <GiEarthAmerica />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostProfile;
