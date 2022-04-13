import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Img = styled.img`
  width: 40vw;

  @media ${device.mobileM} {
    display: none;
  }

  @media ${device.laptop} {
    display: block;
  }
`;
