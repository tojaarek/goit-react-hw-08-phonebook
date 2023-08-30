import { Container, Header, Logo, NavLoggedBox } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import NavLogged from 'components/NavLogged/NavLogged';
import Transitions from 'const/transition';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Transitions>
      <Header>
        <Container>
          <NavLoggedBox>
            <Logo to="/">monoContact</Logo>
            {isLoggedIn ? <NavLogged /> : ''}
          </NavLoggedBox>
          {isLoggedIn ? <UserMenu /> : <Navigation />}
        </Container>
      </Header>
    </Transitions>
  );
};

export default AppBar;
