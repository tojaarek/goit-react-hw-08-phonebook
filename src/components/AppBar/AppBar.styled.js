import styled from 'styled-components';
import { Link as link } from 'react-router-dom';
import { devices } from 'const/breakepoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  padding: 20px 20px;
  @media only screen and ${devices.md} {
    padding: 30px 20px;
  }
`;

export const Login = styled(link)`
  display: none;
  @media only screen and ${devices.md} {
    display: inline;
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
  }
`;

export const SignUp = styled(link)`
  display: none;
  @media only screen and ${devices.md} {
    display: inline;
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

export const MobileButton = styled.div`
  height: 25px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #262626;
  cursor: pointer;
  position: relative;
  @media only screen and ${devices.md} {
    display: none;
  }
`;

export const MobileButtonOpen = styled.div`
  height: 3px;
  border-radius: 5px;
  width: 100%;
  background-color: #fbfbfb;
  @media only screen and ${devices.md} {
    display: none;
  }
`;

export const MobileButtonClose1 = styled.div`
  height: 3px;
  border-radius: 5px;
  width: 100%;
  background-color: #fbfbfb;
  position: absolute;
  top: 50%;
  transform: rotate(45deg);
  @media only screen and ${devices.md} {
    display: none;
  }
`;

export const MobileButtonClose2 = styled.div`
  height: 3px;
  border-radius: 5px;
  width: 100%;
  background-color: #fbfbfb;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  @media only screen and ${devices.md} {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #353535;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 40px 0;
  list-style: none;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  @media only screen and ${devices.md} {
    display: none;
  }
`;

export const MobileMenuItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const MobileLogin = styled(link)`
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 8px 0;
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

export const Redirect = styled(link)`
  color: #ff8a05;
`;
