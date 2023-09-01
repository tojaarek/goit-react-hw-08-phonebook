import { Container, GoHome, Error, Info } from './ErrorPage.styled';
import Transitions from 'const/transition';
import { Helmet } from 'react-helmet';

const ErrorPage = () => (
  <Transitions>
    <Helmet>
      <title>monoContact | 404 Not found</title>
    </Helmet>
    <Container>
      <Error>404</Error>
      <Info>There's nothing here</Info>
      <GoHome to="/">Back to Home page</GoHome>
    </Container>
  </Transitions>
);

export default ErrorPage;
