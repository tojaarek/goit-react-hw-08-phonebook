import {
  Container,
  Section,
  Headline,
  Description,
  TextBox,
  ImageBox,
  Circle,
  Button,
  ButtonFilled,
} from 'pages/HomePage/HomePage.styled';
import Transitions from 'const/transition';
import { Helmet } from 'react-helmet';

const AboutPage = () => (
  <Transitions>
    <Helmet>
      <title>monoContact | About</title>
    </Helmet>
    <Section>
      <Container>
        <TextBox style={{ maxWidth: 750 }}>
          <Headline>
            Made with love <br /> as a final project
          </Headline>
          <Description style={{ marginBottom: 120 }}>
            I designed and developed the monoContact app as my final project of
            the React.js module during the GO IT course. Seamlessly create an
            account or log into an&nbsp;existing one. Effortlessly add, edit,
            view, and delete contacts. <br /> Simplify your life with
            streamlined contact management.
          </Description>
          <ButtonFilled to="/register">Get started</ButtonFilled>
          <Button to="/">Go back</Button>
        </TextBox>
        <ImageBox>
          <Circle />
        </ImageBox>
      </Container>
    </Section>
  </Transitions>
);

export default AboutPage;
