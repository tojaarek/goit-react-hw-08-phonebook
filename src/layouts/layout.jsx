import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <div>Nasz nawigacja</div>
      <Outlet />
    </div>
  );
};

export default Layout;
