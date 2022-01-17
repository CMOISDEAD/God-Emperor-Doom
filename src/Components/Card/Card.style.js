import styled from "styled-components";

export const Main = styled.div`
  perspective: 1000px;
  background: white;
  color: black;
  padding: 0.5rem 6rem;
  border: 1px solid black;
  margin: 1rem 0;
  width: auto;
  height: 60vh;
  transition: all 0.5s ease-out;

  :hover {
    transition: all 0.5s ease-out;
    position: absolute;
    width: 80vw;
    z-index: 10;
    background: #1b1e23;
    color: #f6eddb;
    border: 1px solid #9e2281;

    box-shadow: 0 0 10px #40265c;

    .sketch {
      background: url(${(props) => props.background}) center center;
      background-position: cover;
    }

    .description {
      display: block;
    }

    .date {
      color: #bd4b64;
    }

    .footer {
      color: #ec8d75;
    }
  }

  .description {
    display: none;
    color: #f6eddb;
  }
`;

export const Letter = styled.div`
  font-size: 15rem;
`;
