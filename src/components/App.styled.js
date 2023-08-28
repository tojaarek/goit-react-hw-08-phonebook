import styled from 'styled-components';
import { devices } from 'const/breakepoints';

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  @media only screen and ${devices.xs} {
    max-width: 360px;
  }
  @media only screen and ${devices.sm} {
    max-width: 576px;
  }
  @media only screen and ${devices.md} {
    max-width: 768px;
  }
  @media only screen and ${devices.lg} {
    max-width: 1024px;
  }
  @media only screen and ${devices.xl} {
    max-width: 1280px;
  }
  @media only screen and ${devices.xxl} {
    max-width: 1400px;
  }
`;
