import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #fbfbfb;
  text-decoration: none;
  color: #fbfbfb;
  font-size: 16px;
  font-weight: 500;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border;
  margin-right: 40px;

  &:is(:focus, :hover) {
    color: #ff8a05;
    border: 2px solid #ff8a05;
  }

  &.active {
    color: #262626;
    background-color: #ff8a05;
    border: 2px solid #ff8a05;
  }
`;
