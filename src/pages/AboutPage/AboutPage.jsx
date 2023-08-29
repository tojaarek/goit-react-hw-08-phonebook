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

const AboutPage = () => (
  <Transitions>
    <Section>
      <Container>
        <TextBox style={{ maxWidth: 700 }}>
          <Headline>
            Made with love <br /> as a final project
          </Headline>
          <Description style={{ marginBottom: 120 }}>
            I created the app as my final project of the React.js module during
            the GO IT course. Seamlessly create an account or log into an
            existing one. Effortlessly add, edit, view, and delete contacts.
            Simplify your life with streamlined contact management.
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
