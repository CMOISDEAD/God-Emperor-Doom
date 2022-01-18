import styled from "styled-components";
import { SynthWave } from "../../Components/Colors/Colors";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  margin-top: -4vh;
  padding: 0.5rem;
`;

export const Brand = styled.div`
  font-family: sketch, san-serif !important;
  font-size: 5rem;
  span {
  }
`;

export const Social = styled.div`
  color: ${SynthWave.foreground}; 

  a {
    color: ${SynthWave.foreground};
    transition: all .5s;
    text-decoration: none;

    i{
      span{
        display: none;
        font-style: normal;
      }
      :hover{
        animation: rainbow .2s linear infinite;
        span{
          display: inline;
        }
      }
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
