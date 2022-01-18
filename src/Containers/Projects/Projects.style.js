import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";

const backgroundImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw.wallhaven.cc%2Ffull%2Fvg%2Fwallhaven-vglx93.png&f=1&nofb=1";

export const Project = styled.div`
  /* background: url(${backgroundImage}) center center fixed;
   * background-position: cover; */
  background: ${SynthWave.background};
  h3 {
    color: ${SynthWave.foreground} !important;
  }
`;
