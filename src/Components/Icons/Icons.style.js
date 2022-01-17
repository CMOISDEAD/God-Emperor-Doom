import styled from "styled-components";

export const I = styled.i`
  font-size: 1.8rem;
  margin: 0 1vw 10px 1vw;
  .lang-info {
    display: none;
    transition: all 0.5s ease;
    margin: 0;
  }
  :hover > * {
    display: block;
    position: absolute;
  }
  :hover {
    color: black;
  }
  .sign:hover,
  .lang-info {
    color: black;
  }
`;
