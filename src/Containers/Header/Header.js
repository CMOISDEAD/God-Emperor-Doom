import TypeIt from "typeit-react";
import Particles from "react-tsparticles";

import { Img, Span } from "./Header.style";

import { config } from "./particles_config.js";
import amico from "../../Assets/retropc.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="App-header">
      <Particles id="particles-js" options={config} />
      <TypeIt className="text-center main-text typewriter">
        Hello i'm Camilo Davila.
        <br />
        Passionate <Span className="fullstack">Full-Stack Developer.</Span>
        <br />
        With 3+ years of experience. <br />
        Now Aviable for you.
      </TypeIt>
      <Img src={amico} alt="pc doom" />
    </header>
  );
};
