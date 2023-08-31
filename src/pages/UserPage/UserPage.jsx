import Transitions from 'const/transition';
import { Container, Section, Info, Data, List, Item } from './UserPage.styled';
import { useAuth } from 'hooks/useAuth';

const UserPage = () => {
  const { user } = useAuth();

  return (
    <Transitions>
      <Section>
        <Container>
          Profile
          <List>
            <Item>
              <Info>Username:</Info>
              <Data>{user.name}</Data>
            </Item>
            <Item>
              <Info>E-mail:</Info>
              <Data>{user.email}</Data>
            </Item>
          </List>
        </Container>
      </Section>
    </Transitions>
  );
};
export default UserPage;
