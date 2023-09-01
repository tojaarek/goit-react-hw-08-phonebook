import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 35px;
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #ff8a05;
  outline: none;
  background: transparent;
  margin-right: 40px;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &::placeholder {
    color: #ff8a05;
    opacity: 1;
  }
  &:disabled {
    border-bottom: 1px solid #fbfbfd;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid transparent;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 22px;
  color: #fbfbfd;
  cursor: pointer;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;

  &:focus,
  &:hover {
    color: #ff8a05;
  }
`;

export const ButtonFilled = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid #fbfbfd;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 22px;
  color: #fbfbfd;
  cursor: pointer;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;

  &:focus,
  &:hover {
    border: 1px solid #ff8a05;
    color: #ff8a05;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
