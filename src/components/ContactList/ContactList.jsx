import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/actions';
import { useEffect } from 'react';
import {
  selectContactId,
  selectContacts,
  selectFilter,
} from 'redux/contacts/selectors';
import Contact from 'components/Contact/Contact';
import { setContactId } from 'redux/contacts/contactSlice';
import { List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactToEdit = useSelector(selectContactId);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleEdit = contactId => {
    dispatch(setContactId(contactId));
  };

  if (!contacts || contacts.length === 0) {
    return (
      <ul>
        <li>There is no contacts yet</li>
      </ul>
    );
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          contactToEdit={contactToEdit}
          onEdit={handleEdit}
        />
      ))}
    </List>
  );
};

export default ContactList;
