import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Transitions from 'const/transition';
import { Helmet } from 'react-helmet';
import {
  Container,
  Section,
  ResultBox,
  Wrapper,
} from 'pages/ContactsPage/ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Transitions>
      <Helmet>
        <title>monoContact | Your contacts</title>
      </Helmet>
      <Section>
        <Container>
          Contacts
          <Wrapper>
            <AddContactForm />
            <ResultBox>
              <Filter />
              <ContactList />
            </ResultBox>
          </Wrapper>
        </Container>
        <ToastContainer autoClose={4000} />
      </Section>
    </Transitions>
  );
};
export default ContactsPage;
