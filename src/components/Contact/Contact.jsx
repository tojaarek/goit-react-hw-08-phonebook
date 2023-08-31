import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/actions';
import Transitions from 'const/transition';
import { selectEditing } from 'redux/contacts/selectors';
import { setEdit } from 'redux/contacts/editSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectEditing);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    dispatch(setEdit(true));
  };

  const handleSave = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const updatedContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    console.log(updatedContact);
    dispatch(editContact(contact.id, updatedContact));
    dispatch(setEdit(false));
  };

  return (
    <Transitions>
      <li>
        <div>
          {isEditing ? (
            <form autoComplete="off" onSubmit={handleSave}>
              <input
                type="text"
                name="name"
                placeholder={contact.name}
                required
              />
              <input
                type="text"
                name="number"
                placeholder={contact.number}
                required
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              {contact.name}: {contact.number}
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
