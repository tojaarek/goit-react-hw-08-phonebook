import { useDispatch } from 'react-redux';
import { useState } from 'react';
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
  const [passwordLength, setPasswordLength] = useState(0);
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

  const passwordCheck = event => {
    const password = event.target.value;
    setPasswordLength(password.length);
  };

  return (
    <FormBox>
      <Logo to="/">monoContact</Logo>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Headline>Sign Up</Headline>
        <Subheadline>Create an account to start using monoContact</Subheadline>
        <InputBox>
          <Input type="text" name="user" required />
          <Label>Username*</Label>
        </InputBox>
        <InputBox>
          <Input type="email" name="email" required />
          <Label>E-mail*</Label>
        </InputBox>
        <InputBox>
          <Input
            type="password"
            name="password"
            id="password"
            pattern=".{7,}"
            title="Must be at least 7 characters"
            required
            onChange={passwordCheck}
          />
          <Label>Password*</Label>
          <Notice
            style={{
              opacity: passwordLength > 7 || passwordLength === 0 ? '0' : '1',
              color:
                passwordLength > 7 || passwordLength === 0
                  ? '#ff8a05'
                  : '#ff8a05',
            }}
          >
            Must be at least 7 characters
          </Notice>
        </InputBox>
        <center>
          <Button type="submit">Sign up</Button>
        </center>
      </form>
      <center>
        <Wrapper>
          Already have an account?
          <Redirect to="/login">Log in</Redirect>
        </Wrapper>
      </center>
    </FormBox>
  );
};

export default RegisterForm;
