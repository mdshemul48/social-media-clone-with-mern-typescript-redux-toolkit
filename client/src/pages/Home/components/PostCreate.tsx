import { useState } from 'react';
import { useSelector } from 'react-redux';

import PostCreateModal from './PostCreateModal';

import { UserReducer } from '../../../types/userReducer';
const PostCreator = () => {
  const [showModal, setShowModal] = useState(false);

  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <PostCreateModal show={showModal} onHide={closeModalHandler} />
      <div className="bg-light rounded shadow-sm">
        <div className="d-flex align-items-center p-2">
          {user && (
            <img
              width="50px"
              height="50px"
              className="rounded-circle "
              src={
                process.env.REACT_APP_BACKEND_API_LINK +
                `/public/${user.profileImage}`
              }
              alt=""
            />
          )}
          <p
            className="flex-fill px-2 py-2 mx-2 mt-3 post_create_section"
            onClick={showModalHandler}
          >
            what's on your mind, {user?.firstName}.?
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCreator;
