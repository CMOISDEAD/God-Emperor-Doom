import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";
// import { device } from "../../utils/breakpoints";

export const A = styled.a`
  text-decoration: none;
`;

export const Main = styled.div`
  background: ${SynthWave.background};
  color: ${SynthWave.foreground};
  padding: 0.5rem 6rem;
  border: 1px solid ${SynthWave.foreground};
  margin: 1rem 0;
  width: auto;
  height: 65vh;
  transition: all 0.5s ease-out;

  :hover {
    transition: all 0.5s ease-out;
    background: ${SynthWave.foreground};
    color: ${SynthWave.background};

    box-shadow: 0 0 10px ${SynthWave.background};
  }

  .description {
    display: none;
    color: ${SynthWave.background};
  }
`;

export const Letter = styled.div`
  font-size: 15rem;
`;
