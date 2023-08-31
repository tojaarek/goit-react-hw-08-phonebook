import {
  FormBox,
  Title,
  InputBox,
  Input,
  Label,
  Button,
} from 'components/AddContactForm/AddContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/actions';

const AddContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <FormBox>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Title>Add new contact</Title>
        <InputBox>
          <Input type="text" name="user" id="name" required />
          <Label htmlFor="name">Name</Label>
        </InputBox>
        <InputBox>
          <Input type="tel" name="tel" id="number" required />
          <Label htmlFor="number">Number</Label>
        </InputBox>
        <center>
          <Button type="submit">Add contact</Button>
        </center>
      </form>
    </FormBox>
  );
};

export default AddContactForm;
