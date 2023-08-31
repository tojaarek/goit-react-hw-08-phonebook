import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Transitions from 'const/transition';
import {
  Container,
  Section,
  ResultBox,
  Wrapper,
} from 'pages/ContactsPage/ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Transitions>
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
      </Section>
    </Transitions>
  );
};
export default ContactsPage;
