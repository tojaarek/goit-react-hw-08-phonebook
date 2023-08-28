import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #353535;
  width: 820px;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
`;

export const Figure1 = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid #353535;
  border-right: 100px solid transparent;
  position
`;

export const Figure2 = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid #353535;
  border-left: 100px solid transparent;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fbfbfd;
  font-size: 64px;
  margin: 0;
  padding: 0;
`;
