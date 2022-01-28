import styled from "styled-components";
import { SynthWave } from "../Colors/Colors";

export const FooterBox = styled.div`
  background: ${SynthWave.background};
  color: ${SynthWave.foreground};
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);

  ul{
    list-style: none;
    li{
     color: ${SynthWave.foreground} 
    }
  }
}
`;
