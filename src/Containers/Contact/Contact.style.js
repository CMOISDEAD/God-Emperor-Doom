import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";
import { device } from "../../utils/breakpoints";

export const CardBox = styled.div`
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    writing-mode: normal;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Side = styled.div`
  @media ${device.mobileM} {
    writing-mode: horizontal-tb;
  }

  @media ${device.laptop} {
    writing-mode: horizontal-tb;
  }

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
