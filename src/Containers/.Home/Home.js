import face from "./face.jpg";
import { App, Button, ButtonGroup } from "./Home.style";

function Home() {
  return (
    <App>
      <header className="App-header">
        <div className="left-header">
          <h3>
            <span className="asiatic">[ポ]</span> Skills
          </h3>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
        </div>
        <div className="center-header">
          <h1 className="text-center text-capitalize primary-text">
            Hey im <span className="text-decoration-underline">camilo</span> ;)
          </h1>
          <h3 className="asiatic text-white">ポートフォリオ</h3>
          <img src={face} className="App-logo" alt="logo" />
          <br />
          <q className="mt-1">
            UNIX is very simple, it just needs a genius to understand its
            simplicity.
          </q>
          <ButtonGroup>
            <Button className="btn mt-2"> Projects</Button>
            <Button className="btn mt-2"> Contact</Button>
            <Button className="btn mt-2"> More</Button>
          </ButtonGroup>
        </div>
        <div className="right-header">
          <h3>
            <span className="asiatic">[ポ]</span> Contact
          </h3>
          <div className="text-end">
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </div>
        </div>
      </header>
    </App>
  );
}

export default Home;
