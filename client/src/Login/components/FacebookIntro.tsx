import facebookLogo from '../../assets/nameLogo.svg';
const FacebookIntro = () => {
  return (
    <div className="login__info">
      <img src={facebookLogo} alt="" />
      <p className="fs-4">
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
  );
};

export default FacebookIntro;
