import { Container, Header, Logo, NavLoggedBox } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import NavLogged from 'components/NavLogged/NavLogged';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <NavLoggedBox>
          <Logo to="/">monoContact</Logo>
          {isLoggedIn ? <NavLogged /> : ''}
        </NavLoggedBox>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </Container>
    </Header>
  );
};

export default AppBar;
