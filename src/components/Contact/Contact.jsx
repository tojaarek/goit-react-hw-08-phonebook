import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/actions';
import Transitions from 'const/transition';

const Contact = ({ contact, contactToEdit, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
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

    dispatch(editContact({ id: contact.id, ...updatedContact }));
    onEdit(null);
  };

  return (
    <Transitions>
      <li>
        <div>
          {contactToEdit === contact.id ? (
            <Transitions>
              <form autoComplete="off" onSubmit={handleSave}>
                <input type="text" name="name" placeholder={contact.name} />
                <input type="text" name="number" placeholder={contact.number} />
                <button type="submit">Save</button>
              </form>
            </Transitions>
          ) : (
            <>
              <input type="text" name="name" value={contact.name} disabled />
              <input
                type="text"
                name="number"
                value={contact.number}
                disabled
              />
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      </li>
    </Transitions>
  );
};

export default Contact;
