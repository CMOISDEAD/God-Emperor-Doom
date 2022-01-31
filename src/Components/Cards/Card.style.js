import styled from "styled-components";
import { SynthWave } from "../Colors/Colors";

export const CardBox = styled.div`
  background: ${SynthWave.white};
  color: ${SynthWave.background};
`;

export const A = styled.a`
  text-decoraticon: none;
  color: ${SynthWave.cyan};

  :hover {
    color: ${SynthWave.blue} !important;
  }
`;
