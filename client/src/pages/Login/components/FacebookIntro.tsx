import facebookLogo from '../../../assets/nameLogo.svg';
const FacebookIntro = () => {
  return (
    <div className="login__info w-75 mx-auto mt-lg-5">
      <img className="mt-lg-4" src={facebookLogo} alt="facebook logo" />
      <p className="fs-4">
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
  );
};

export default FacebookIntro;
