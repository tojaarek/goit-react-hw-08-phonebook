import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/actions';
import {
  FormBox,
  Logo,
  Headline,
  Subheadline,
  InputBox,
  Input,
  Label,
  Button,
  Wrapper,
  Redirect,
  Notice,
} from 'components/RegisterForm/RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signUp({
        name: form.elements.user.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormBox>
      <Logo>monoContact</Logo>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Headline>Sign Up</Headline>
        <Subheadline>Create an account to start using monoContact</Subheadline>
        <InputBox>
          <Input type="text" name="user" required />
          <Label>Username</Label>
        </InputBox>
        <InputBox>
          <Input type="email" name="email" required />
          <Label>E-mail</Label>
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            id="password"
            pattern=".{7,}"
            title="Your password must be at least 7 characters"
            required
          />
          <Label>Password</Label>
          <Notice id="passwordNotice">
            Password must be at least 7 characters
          </Notice>
        </InputBox>
        <center>
          <Button type="submit">Sign Up</Button>
        </center>
      </form>
      <center>
        <Wrapper>
          Already have an account?
          <Redirect to="/login">Sign in</Redirect>
        </Wrapper>
      </center>
    </FormBox>
  );
};

export default RegisterForm;
