import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Container } from './RegisterPage.styled';
import Transitions from 'const/transition';

const RegisterPage = () => (
  <Transitions>
    <Container>
      <RegisterForm />
    </Container>
  </Transitions>
);

export default RegisterPage;
