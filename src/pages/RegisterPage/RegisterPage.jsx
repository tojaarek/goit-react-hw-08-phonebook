import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Container } from './RegisterPage.styled';
import Transitions from 'const/transition';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => (
  <Transitions>
    <Helmet>
      <title>monoContact | Sign up now</title>
    </Helmet>
    <Container>
      <RegisterForm />
      <ToastContainer autoClose={4000} />
    </Container>
  </Transitions>
);

export default RegisterPage;
