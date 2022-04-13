import TypeIt from "typeit-react";
import Particles from "react-tsparticles";

import { Img } from "./Header.style";

import amico from "../../Assets/Programming-pana.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="App-header">
      <Particles
        id="particles-js"
        // init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1d2021",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fbf1c7",
            },
            links: {
              color: "#fbf1c7",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <TypeIt className="text-center main-text">
        Hello i'm Camilo Davila. <br />
        Passionate <span className="fullstack">Full-Stack Developer.</span>{" "}
        <br />
        With 3+ years of experience. <br />
        Now Aviable for you.
      </TypeIt>
      <Img src={amico} alt="" />
    </header>
  );
};
