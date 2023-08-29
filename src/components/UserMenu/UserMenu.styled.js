import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  margin-right: 40px;
  display: inline-block;
`;

export const Button = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #fbfbfb;
  text-decoration: none;
  color: #fbfbfb;
  font-weight: 500;
  font-size: 16px;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border, background-color;
  &:is(:focus, :hover) {
    color: #262626;
    border: 2px solid #fbfbfb;
    background-color: #fbfbfb;
  }
`;
