import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Container maxWidth="xl">
      <div>
        <h1>
          Milions of contacts <br /> in MonoContact
        </h1>
        <p>Effortless contact management at your fingertips.</p>
        <Link>Sign up</Link>
      </div>
    </Container>
  );
};

export default Hero;
