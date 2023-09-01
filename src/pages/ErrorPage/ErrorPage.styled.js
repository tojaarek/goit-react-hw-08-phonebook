import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.p`
  font-size: 104px;
  font-weight: 600;
  color: #ff8a05;
  margin: 0;
  padding: 0;
`;

export const Info = styled.p`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 50px;
`;

export const GoHome = styled(Link)`
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
