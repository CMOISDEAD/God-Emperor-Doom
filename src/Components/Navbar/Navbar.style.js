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
        span{
          display: inline;
        }
      }
    }

    :hover{
      color: #fff8f3;
    }
  }
`
