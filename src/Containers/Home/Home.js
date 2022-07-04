import { App } from "./Home.style";
import { Header } from "../Header/Header";
import { Navbar } from "../../Components/Navbar/Navbar";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Footer } from "../../Components/Footer/Footer";
// import { Contact } from "../Contact/Contact";

function Home() {
  return (
    <>
      <App>
        <Navbar />
        <Header />
        <footer>
          <div className="sketch ps-3">Scroll Down X</div>
          <div className="sketch pe-3">X Scroll Down</div>
        </footer>
      </App>
      <About />
      <Projects />
      <br />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default Home;
