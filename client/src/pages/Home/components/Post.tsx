import PostProfile from './PostProfile';

const Post = () => {
  return (
    <div className="bg-light shadow-sm rounded">
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
        <span>you, and 500 others</span>
        <div></div>
      </div>
    </div>
  );
};

export default Post;
