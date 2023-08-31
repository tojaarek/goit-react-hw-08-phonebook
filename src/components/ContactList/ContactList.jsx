import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/actions';
import { useEffect } from 'react';
import { selectLoading, selectContacts } from 'redux/contacts/selectors';
import Contact from 'components/Contact/Contact';
import { Spinner } from './ContactList.styled';
import { Circles } from 'react-loader-spinner';

const ContactList = ({ filter }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (!contacts || contacts.length === 0) {
    return (
      <ul>
        <li>There is no contacts yet</li>
      </ul>
    );
  }

  //const filteredContacts = contacts.filter(contact =>
  // contact.name.toLowerCase().includes(filter.toLowerCase())
  //);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
