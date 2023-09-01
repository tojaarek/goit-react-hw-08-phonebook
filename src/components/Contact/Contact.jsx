import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/actions';
import { Input, Button, ButtonFilled, Box, Item } from './Contact.styled';
import { confirmAlert } from 'react-confirm-alert';
import './react-confirm-alert.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';

const Contact = ({ contact, contactToEdit, onEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDelete = () => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this contact?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(deleteContact(contact.id));
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const handleEdit = () => {
    onEdit(contact.id);
  };

  const handleSave = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const updatedContact = {
      name: form.elements.name.value.trim() || contact.name,
      number: form.elements.number.value.trim() || contact.number,
    };
    const duplicateContact = contacts.find(
      existing => existing.name === updatedContact.name
    );
    if (duplicateContact) {
      toast.error(`${updatedContact.name} is already in contacts`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    dispatch(editContact({ id: contact.id, ...updatedContact }));
    onEdit(null);
  };

  return (
    <Item>
      {contactToEdit === contact.id ? (
        <form autoComplete="off" onSubmit={handleSave}>
          <Box>
            <div>
              <Input type="text" name="name" placeholder={contact.name} />
              <Input type="tel" name="number" placeholder={contact.number} />
            </div>
            <div>
              <ButtonFilled type="submit">Save</ButtonFilled>
            </div>
          </Box>
        </form>
      ) : (
        <Box>
          <div>
            <Input type="text" name="name" value={contact.name} disabled />
            <Input type="tel" name="number" value={contact.number} disabled />
          </div>
          <div>
            <ButtonFilled onClick={handleEdit}>Edit</ButtonFilled>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </Box>
      )}
    </Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  contactToEdit: PropTypes.string,
  onEdit: PropTypes.func,
};

export default Contact;
