import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from '../RegisterPage/RegisterPage.styled';
import Transitions from 'const/transition';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => (
  <Transitions>
    <Helmet>
      <title>monoContact | Log in</title>
    </Helmet>
    <Container>
      <LoginForm />
      <ToastContainer autoClose={4000} />
    </Container>
  </Transitions>
);

export default LoginPage;
