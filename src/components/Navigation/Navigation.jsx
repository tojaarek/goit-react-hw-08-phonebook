import { SignUp, Login } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
  return (
    <nav>
      <Login to="/login">Log in</Login>
      <SignUp to="/register">Sign up</SignUp>
    </nav>
  );
};

export default Navigation;
