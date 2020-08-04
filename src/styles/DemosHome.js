/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template: minmax(160px, 0.8fr) minmax(160px, 1fr) / repeat(
      3,
      minmax(160px, 20em)
    );
  gap: 1.5em;
  padding: 2% 0%;
  min-width: 550px;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template: unset;
    grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1em;
    min-width: 260px;
  }
`;
