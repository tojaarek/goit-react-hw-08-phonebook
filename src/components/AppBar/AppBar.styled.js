import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  padding: 30px 20px;
`;

export const Login = styled(link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid transparent;
  text-decoration: none;
  color: #fbfbfb;
  font-size: 16px;
  font-weight: 500;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;
  margin-right: 40px;
  &:is(:focus, :hover) {
    color: #ff8a05;
  }
`;

export const SignUp = styled(link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ff8a05;
  text-decoration: none;
  color: #ff8a05;
  font-size: 16px;
  font-weight: 500;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;
  &:is(:focus, :hover) {
    color: #262626;
    border: 2px solid #ff8a05;
    background-color: #ff8a05;
  }
`;

export const Logo = styled(link)`
  font-size: 22px;
  font-weight: 600;
  color: #fbfbfb;
  width: fit-content;
  position: relative;
  padding-left: 24px;
  text-decoration: none;
  z-index: 3;
  margin-top: 0;
  margin-right: 100px;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 22px;
    height: 22px;
    top: 2px;
    left: 0;
    border-radius: 50%;
    background-color: #ff8a05;
  }
`;

export const NavLoggedBox = styled.div`
  display: flex;
  align-items: center;
`;
