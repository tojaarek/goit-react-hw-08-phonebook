import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormBox = styled.div`
  width: 410px;
  padding: 40px;
  background-color: #353535;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const Logo = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #fbfbfb;
  width: fit-content;
  position: relative;
  padding-left: 20px;
  text-decoration: none;
  z-index: 3;
  margin-top: 0;
  margin-bottom: 20px;
  display: block;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 18px;
    height: 18px;
    top: 1px;
    left: 0;
    border-radius: 50%;
    background-color: #ff8a05;
  }
`;

export const Headline = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const Subheadline = styled.p`
  font-size: 14px;
  margin-bottom: 60px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Notice = styled.p`
  font-size: 12px;
  position: absolute;
  bottom: 0;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  color: #ff8a05;
  opacity: 0;
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

  &:focus ~ ${Notice} {
    opacity: 1 !important;
    color: #ff8a05 !important;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
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
  margin-bottom: 60px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;

  &:focus,
  &:hover {
    border: 1px solid #ff8a05;
    color: #ff8a05;
  }
`;

export const Wrapper = styled.div`
  font-size: 14px;
`;

export const Redirect = styled(Link)`
  color: #ff8a05;
  margin-left: 5px;
`;
