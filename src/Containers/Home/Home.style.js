import styled from "styled-components";

// const primaryColor = "#2c3e50";
// const secondaryColor = "#34495e";
// const lightColor = "#ecf0f1";

const backgroundImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw.wallhaven.cc%2Ffull%2Fvg%2Fwallhaven-vglx93.png&f=1&nofb=1";

export const App = styled.div`
  background: url(${backgroundImage}) center center fixed;
  background-size: cover;
  color: white;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    .fullstack{
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
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;
