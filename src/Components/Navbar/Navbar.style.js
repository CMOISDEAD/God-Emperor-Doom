import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";
// import { device } from "../../utils/breakpoints";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -4vh;
  padding: 0.5rem;
`;

export const Brand = styled.div`
  text-align: center;
  font-family: sketch, san-serif !important;
  font-size: 5rem;
`;

export const Social = styled.div`
  color: ${SynthWave.foreground}; 

  a {
    color: ${SynthWave.foreground};
    transition: all .5s;
    text-decoration: none;
    
    span{
      display: none;
      font-style: normal;
    }

    .icon-social:hover{
      animation: rainbow .2s linear infinite;
    }
   
    :hover{
      color: ${SynthWave.foreground};
    }

    @keyframes rainbow{
      25%{
        color: ${SynthWave.pink};
      }
      50%{
        color: ${SynthWave.blue};
      }
      75%{
        color: ${SynthWave.red};
      }
      100%{
      color: ${SynthWave.cyan};
      }
  }
`;
