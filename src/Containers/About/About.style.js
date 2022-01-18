import styled from "styled-components";
import image from "../V2/face.jpg";
import { SynthWave } from "../../Components/Colors/Colors";

export const AboutBox = styled.div`
  color: ${SynthWave.background} !important;
`;

export const Picture = styled.div`
  background: url(${image}) center center no-repeat;
  background-position: cover;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${SynthWave.foreground};
  box-shadow: inset 0 -30px 15px 1px white;
`;

export const IconList = styled.div`
  ul {
    li {
      display: inline;
      padding: 0 1vw;
      a {
        text-weight: normal !important;
        color: ${SynthWave.background};
        text-decoration: none;
      }
    }
    list-style: none;
  }
`;
