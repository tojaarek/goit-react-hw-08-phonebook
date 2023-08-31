import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/actions';
import { useEffect } from 'react';
import { selectContactId, selectContacts } from 'redux/contacts/selectors';
import Contact from 'components/Contact/Contact';
import { setContactId } from 'redux/contacts/contactSlice';

const ContactList = ({ filter }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactToEdit = useSelector(selectContactId);

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

  //const filteredContacts = contacts.filter(contact =>
  // contact.name.toLowerCase().includes(filter.toLowerCase())
  //);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          contactToEdit={contactToEdit}
          onEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default ContactList;
