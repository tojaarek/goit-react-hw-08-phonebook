import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 64px;
  padding: 0 24px;
`;

export const Link = styled(link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ba704f;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-right: 30px;
`;
