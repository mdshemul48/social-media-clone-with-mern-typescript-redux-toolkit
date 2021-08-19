import React from 'react';

import { GiEarthAmerica } from 'react-icons/gi';

const PostProfile: React.FC = (props) => {
  return (
    <div>
      <div className="d-flex p-2">
        <div className="mt-1">
          <img
            width="40px"
            src="http://localhost:5000/public/e8a0d7cb-4aea-445f-833d-3e61f1079309.jpeg"
            alt=""
            className="rounded-circle"
          />
        </div>
        <div className="ms-2">
          <span className="d-block">MD. Shimul</span>
          <span className="text-dark post-day me-1">1day ago</span>
          <span>
            <GiEarthAmerica />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostProfile;
