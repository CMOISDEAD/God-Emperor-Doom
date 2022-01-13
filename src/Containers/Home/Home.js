import TypeIt from "typeit-react";

import { App } from "./Home.style";
import { Navbar } from "../../Components/Navbar/Navbar";

function Home() {
  return (
    <>
      <App>
        <Navbar />
        <header className="App-header">
          <TypeIt className="text-center">
            Frontend Developer. <br />
            whit 3+ years of experience. <br />
            Now Aviable for you.
          </TypeIt>
        </header>
        <footer>
          <div className="sketch ps-3">
            Scroll down 
          </div>
          <div className="sketch pe-3">
             Scroll down
          </div>
        </footer>
      </App>
    </>
  );
}

export default Home;
