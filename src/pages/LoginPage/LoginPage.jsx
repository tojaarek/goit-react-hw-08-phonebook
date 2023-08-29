import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from '../RegisterPage/RegisterPage.styled';
import Transitions from 'const/transition';

const LoginPage = () => (
  <Transitions>
    <Container>
      <LoginForm />
    </Container>
  </Transitions>
);

export default LoginPage;
