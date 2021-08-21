import styled from 'styled-components';

export const Page = styled.div`
  height: 100%;
  display: grid;
  grid-row: auto auto auto;
`;

export const LocationName = styled.div`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
`;

export const LocationCoords = styled.div`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
`;

export const MapContainer = styled.div`
  grid-row-start: 3;
  height: 1000px;
`;