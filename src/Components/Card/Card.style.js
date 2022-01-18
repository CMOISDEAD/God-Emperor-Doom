import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";

export const Main = styled.div`
  perspective: 1000px;
  background: ${SynthWave.foreground};
  color: ${SynthWave.background};
  padding: 0.5rem 6rem;
  border: 1px solid ${SynthWave.background};
  margin: 1rem 0;
  width: auto;
  height: 60vh;
  transition: all 0.5s ease-out;

  :hover {
    transition: all 0.5s ease-out;
    background: ${SynthWave.background};
    color: ${SynthWave.foreground};

    box-shadow: 0 0 10px ${SynthWave.purple};
  }

  .description {
    display: none;
    color: ${SynthWave.foreground};
  }
`;

export const Letter = styled.div`
  font-size: 15rem;
`;
