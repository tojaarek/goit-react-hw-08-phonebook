import styled from 'styled-components';

export const FormBox = styled.div`
  position: relative;
  margin-bottom: 53px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
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
