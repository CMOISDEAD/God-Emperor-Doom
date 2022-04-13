import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";
import background_dark from "../../Assets/low-poly-grid-haikei.png";
import background_light from "../../Assets/light-low-poly-grid-haikei.png";
// import { device } from "../../utils/breakpoints";

export const A = styled.a`
  text-decoration: none;
`;

export const Main = styled.div`
  /* background: ${SynthWave.background}; */
  background: url(${background_dark}) center center;
  background-size: cover;
  color: ${SynthWave.foreground};
  padding: 0.5rem 6rem;
  border: 1px solid ${SynthWave.background};
  margin: 1rem 0;
  width: auto;
  height: 65vh;
  transition: all 0.5s ease-out;
  box-shadow: 0 0 10px ${SynthWave.background};

  :hover {
    transition: all 0.5s ease-out;
    background: url(${background_light}) center center;
    background-size: cover;
    border: 1px solid ${SynthWave.foreground};
    color: ${SynthWave.background};
    box-shadow: 0 0 10px ${SynthWave.foreground};
  }

  .description {
    display: none;
    color: ${SynthWave.background};
  }
`;

export const Letter = styled.div`
  font-size: 15rem;
`;
