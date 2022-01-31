import TypeIt from "typeit-react";

import { App, Img } from "./Home.style";
import { Navbar } from "../../Components/Navbar/Navbar";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Footer } from "../../Components/Footer/Footer";
import { Contact } from "../Contact/Contact";

import amico from "../../Assets/Programming-pana.svg";

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
            With 3+ years of experience. <br />
            Now Aviable for you.
          </TypeIt>
          <Img src={amico} alt="" />
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
      <Footer />
    </>
  );
}

export default Home;
