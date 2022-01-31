import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";
import { device } from "../../utils/breakpoints";

const backgroundImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw.wallhaven.cc%2Ffull%2Fvg%2Fwallhaven-vglx93.png&f=1&nofb=1";

export const App = styled.div`
  @media ${device.mobileM} {
    flex-direction: column;
    justify-content: center;
  }

  // background: url(${backgroundImage}) center center fixed;
  background: ${SynthWave.background};
  background-size: cover;
  color: ${SynthWave.foreground};

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: calc(10px + 2vmin);
    margin-bottom: -4.2vh;
  }

  .primary-text {
    font-size: 5rem;
  }

  .center-header {
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-text {
    font-size: calc(10px + 3vmin);
    .fullstack {
      // animation: glow 1s linear infinite alternate;
    }
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
`;

export const Img = styled.img`
  width: 40vw;

  @media ${device.mobileM} {
    display: none;
  }

  @media ${device.laptop} {
    display: block;
  }
`;
