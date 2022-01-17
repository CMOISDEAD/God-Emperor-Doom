import styled from "styled-components";

export const Main = styled.div`
  background: white;
  color: black;
  padding: 0.5rem 6rem;
  border: 1px solid black;
  margin: 1rem 0;
  width: auto;
  height: 60vh;
  transition: all 0.5s ease;

  .body {
    font-size: 15rem;
  }

  :hover {
    background: black;
    color: white;
    border: 1px solid white;
    box-shadow: 0 0 10px white;
  }
`;
