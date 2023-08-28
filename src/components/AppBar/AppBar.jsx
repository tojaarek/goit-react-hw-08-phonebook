import { Container, Link } from './AppBar.styled';

const AppBar = () => (
  <header>
    <Container>
      <p>MonoContact</p>
      <Link to="/login">Sign in</Link>
    </Container>
  </header>
);

export default AppBar;
