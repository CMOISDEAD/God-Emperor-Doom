import TypeIt from "typeit-react";

import { App } from "./Home.style";
import { Navbar } from "../../Components/Navbar/Navbar";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Footer } from "../../Components/Footer/Footer";
import { Contact } from "../Contact/Contact";

function Home() {
  return (
    <>
      <App>
        <Navbar />
        <header className="App-header">
          <TypeIt className="text-center main-text">
            Hello i'm Camilo Davila. <br />
            Passionate <span className="fullstack">
              Full-Stack Developer.
            </span>{" "}
            <br />
            with 3+ years of experience. <br />
            Now Aviable for you.
          </TypeIt>
        </header>
        <footer>
          <div className="sketch ps-3">Scroll Down X</div>
          <div className="sketch pe-3">X Scroll Down</div>
        </footer>
      </App>
      <About />
      <Projects />
      <br />
      <Contact />
    </>
  );
}

export default Home;
