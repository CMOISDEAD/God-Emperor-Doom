import styled from "styled-components";

const backgroundImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw.wallhaven.cc%2Ffull%2Fvg%2Fwallhaven-vglx93.png&f=1&nofb=1";

export const Project = styled.div`
  // background: url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2F5%2Fd%2F823331-popular-black-and-white-desktop-backgrounds-1920x1080-for-ios.jpg&f=1&nofb=1)
  // center center fixed;
  background: url(${backgroundImage}) center center fixed;
  background-position: cover;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: auto;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Side = styled.div`
  writing-mode: vertical-rl;
  color: white;
  font-size: 1.4rem;
  animation: bounce 1s linear infinite;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }
`;
