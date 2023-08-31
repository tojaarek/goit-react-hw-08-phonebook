import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const Section = styled.section`
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Info = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

export const Data = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 40px;
  margin: 0;
  margin-top: 40px;
  background-color: #353535;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  width: 330px;
  letter-spacing: normal;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  padding: 40px;
  background-color: #353535;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 40px;
  letter-spacing: normal;
`;
