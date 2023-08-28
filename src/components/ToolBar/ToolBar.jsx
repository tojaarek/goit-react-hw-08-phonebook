import { Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ToolBar = () => {
  return (
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontWeight: 600 }}
      >
        MonoContact
      </Typography>
      <Link to="/login">
        <Button color="inherit">Sign in</Button>
      </Link>
      <Link to="/login">
        <Button color="inherit">Sign up</Button>
      </Link>
    </Toolbar>
  );
};

export default ToolBar;
