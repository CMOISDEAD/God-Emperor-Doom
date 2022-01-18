import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";

export const CardBox = styled.div`
  display: flex;
  flex-direction: auto;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Side = styled.div`
  writing-mode: vertical-rl;
  color: ${SynthWave.background};
  font-size: 1.4rem;
  animation: bounce 1s linear infinite;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }
`;
