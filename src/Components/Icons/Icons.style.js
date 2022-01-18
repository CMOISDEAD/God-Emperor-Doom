import styled from "styled-components";

export const I = styled.i`
  font-size: 1.5rem;
  text-weight: normal !important;
  margin: 0 1vw 1vh 1vw;

  .lang-info {
    font-size: 1rem;
    margin: 0;
    visibility: hidden;
  }

  :hover {
    .lang-info {
      visibility: visible;
    }
  }
`;
