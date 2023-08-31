import styled from 'styled-components';

export const FormBox = styled.div`
  width: 410px;
  min-width: 410px;
  padding: 40px;
  background-color: #353535;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 40px;
  letter-spacing: normal;
  margin-right: 40px;
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 60px;
  margin-top: 0;
  font-weight: 400;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 35px;
  border: none;
  border-bottom: 1px solid #fbfbfd;
  outline: none;
  background: transparent;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:focus-within {
    border-bottom: 1px solid #ff8a05;
    color: #ff8a05;
  }

  &:valid + label {
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
  }

  &:focus + label {
    top: -20px;
    left: 0;
    color: #ff8a05;
    font-size: 12px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 400;
  color: #fbfbfd;
  pointer-events: none;
  transition: 0.5s;
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  outline: none;
  border: 1px solid #fbfbfd;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 22px;
  color: #fbfbfd;
  margin-top: 25px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;

  &:focus,
  &:hover {
    border: 1px solid #ff8a05;
    color: #ff8a05;
  }
`;
