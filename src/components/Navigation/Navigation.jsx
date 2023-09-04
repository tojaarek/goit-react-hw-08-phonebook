import {
  SignUp,
  Login,
  MobileButton,
  MobileButtonOpen,
  MobileButtonClose1,
  MobileButtonClose2,
  MobileMenu,
  MobileMenuItem,
  MobileLogin,
  Redirect,
} from 'components/AppBar/AppBar.styled';
import { useState } from 'react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileButtonOpen, setMobileButtonOpen] = useState(true);

  const handleMobileButtonClick = () => {
    setMobileButtonOpen(prevState => !prevState);
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Login to="/login">Log in</Login>
      <SignUp to="/register">Sign up</SignUp>
      <MobileButton onClick={handleMobileButtonClick}>
        {mobileButtonOpen ? (
          <>
            <MobileButtonOpen />
            <MobileButtonOpen />
            <MobileButtonOpen />
          </>
        ) : (
          <>
            <MobileButtonClose1 />
            <MobileButtonClose2 />
          </>
        )}
      </MobileButton>
      {menuOpen && (
        <MobileMenu>
          <MobileMenuItem>
            <MobileLogin to="/login">Log in</MobileLogin>
          </MobileMenuItem>
          <MobileMenuItem>
            Don't have an account yet?
            <Redirect to="/register">Sign up</Redirect>
          </MobileMenuItem>
        </MobileMenu>
      )}
    </nav>
  );
};

export default Navigation;
