import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { SynthWave } from "../../Components/Colors/Colors";

export const Img = styled.img`
  width: 37vw;

  @media ${device.mobileM} {
    display: none;
  }

  @media ${device.laptop} {
    display: block;
  }
`;

export const Span = styled.span`
  animation: rainbow infinite 2s ease-out;
  @keyframes rainbow {
    25% {
      color: ${SynthWave.pink};
    }
    50% {
      color: ${SynthWave.blue};
    }
    75% {
      color: ${SynthWave.red};
    }
    100% {
      color: ${SynthWave.cyan};
    }
  }
`;
