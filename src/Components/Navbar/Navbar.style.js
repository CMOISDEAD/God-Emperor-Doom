import styled from "styled-components";

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
    animation: rainbow 0.2s linear infinite;
  }
`;

export const Social = styled.div`
  color: white; 

  a {
    color: white;
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
      color: #fff8f3;
    }

    @keyframes rainbow{
      25%{
        color: #ec8d75;
      }
      50%{
        color: #244584;
      }
      75%{
        color: #9e2281;
      }
      100%{
      color: #96e6c2;
      }
  }
`;
