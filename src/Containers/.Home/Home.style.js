import styled from "styled-components";

const primaryColor = "#2c3e50";
const secondaryColor = "#34495e";
const lightColor = "#ecf0f1";

export const App = styled.div`
  background-color: ${primaryColor};
  color: white;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
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

  .left-header {
    margin: 0 1vw;
  }

  .right-header {
    margin: 0 1vw;
  }

  q {
    font-size: 1.3rem;
  }

  li {
    font-size: 1rem;
    list-style: none;
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
