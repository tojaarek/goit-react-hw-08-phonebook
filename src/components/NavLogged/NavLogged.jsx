import { Link } from './NavLogged.styled';

const NavLogged = () => {
  return (
    <nav>
      <Link to="/contacts">Contacts</Link>
      <Link to="/user">User</Link>
    </nav>
  );
};

export default NavLogged;
