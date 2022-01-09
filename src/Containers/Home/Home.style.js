import styled from "styled-components";

const primaryColor = "#2c3e50";
const secondaryColor = "#34495e";
const lightColor = "#ecf0f1";

export const App = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    background-color: ${primaryColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  q {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  background-color: ${secondaryColor};
  border: 1px solid ${lightColor};
  color: ${lightColor};
  margin: 0 4vw;

  :hover {
    color: ${primaryColor};
    background-color: ${lightColor};
    border: 1px solid ${secondaryColor};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
