import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";
import { device } from "../../utils/breakpoints";

export const App = styled.div`
  color: ${SynthWave.foreground};

  .primary-text {
    font-size: 5rem;
  }

  .center-header {
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .sketch {
      font-size: 1.4rem;
      animation: arrow 1s linear infinite;
    }
  }

  @keyframes arrow {
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

  @keyframes glow {
    from {
      text-shadow: 0 0 10px ${SynthWave.foreground},
        0 0 20px ${SynthWave.foreground}, 0 0 30px ${SynthWave.red},
        0 0 40px ${SynthWave.red}, 0 0 50px ${SynthWave.red},
        0 0 60px ${SynthWave.red}, 0 0 70px ${SynthWave.red};
    }
    to {
      text-shadow: 0 0 20px ${SynthWave.foreground}, 0 0 30px ${SynthWave.pink},
        0 0 40px ${SynthWave.pink}, 0 0 50px ${SynthWave.pink},
        0 0 60px ${SynthWave.pink}, 0 0 70px ${SynthWave.pink},
        0 0 80px ${SynthWave.pink};
    }
  }

  @media ${device.mobileM} {
    flex-direction: column;
    justify-content: center;
  }
`;
