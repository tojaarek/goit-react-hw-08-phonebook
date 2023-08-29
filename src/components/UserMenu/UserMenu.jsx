import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/actions';
import { Name, Button, Nav } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <Name>Hello, {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
