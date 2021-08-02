import LoginForm from './LoginForm';
import Signup from './Signup';
const LoginSection = () => {
  return (
    <div className="login__form mt-5">
      <div className="card shadow w-75 mx-auto p-3">
        <LoginForm />
        <p className="text-primary my-2 text-center">Forgotten password?</p>
        <hr />
        <Signup />
      </div>
    </div>
  );
};

export default LoginSection;
