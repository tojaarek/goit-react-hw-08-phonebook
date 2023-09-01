import {
  Container,
  Section,
  Headline,
  Description,
  TextBox,
  Bullets,
  BulletItem,
  ImageBox,
  Circle,
  BulletImage,
  ImageText,
  Button,
  ButtonFilled,
} from './HomePage.styled';
import create from './images/create.png';
import read from './images/read.png';
import update from './images/update.png';
import remove from './images/delete.png';
import Transitions from 'const/transition';
import { Helmet } from 'react-helmet';

const HomePage = () => (
  <Transitions>
    <Helmet>
      <title>monoContact | Home page</title>
    </Helmet>
    <Section>
      <Container>
        <TextBox>
          <Headline>
            Milions of contacts <br /> in monoContact
          </Headline>
          <Description>
            Set free your old contacts book! With monoContact, you'll regain
            clarity by getting all those contacts out of your notes and onto
            your&nbsp;Online Contacts Database - no matter where,
            no&nbsp;matter&nbsp;what&nbsp;device.
          </Description>
          <Bullets>
            <BulletItem>
              <BulletImage src={create} />
              <ImageText>Create</ImageText>
            </BulletItem>
            <BulletItem>
              <BulletImage src={read} />
              <ImageText>Read</ImageText>
            </BulletItem>
            <BulletItem>
              <BulletImage src={update} />
              <ImageText>Update</ImageText>
            </BulletItem>
            <BulletItem>
              <BulletImage src={remove} />
              <ImageText>Delete</ImageText>
            </BulletItem>
          </Bullets>
          <ButtonFilled to="/register">Get started</ButtonFilled>
          <Button to="/about">Learn more</Button>
        </TextBox>
        <ImageBox>
          <Circle />
        </ImageBox>
      </Container>
    </Section>
  </Transitions>
);

export default HomePage;
