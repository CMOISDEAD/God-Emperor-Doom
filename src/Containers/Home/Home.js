import face from "./face.jpg";
import { App, Button, ButtonGroup } from "./Home.style";

function Home() {
  return (
    <App>
      <header className="App-header">
        <h3 className="asiatic text-white">ポートフォリオ</h3>
        <img src={face} className="App-logo" alt="logo" />
        <q className="mt-1">
          UNIX is very simple, it just needs a genius to understand its
          simplicity.
        </q>
        <ButtonGroup>
          <Button className="btn mt-2"> Projects</Button>
          <Button className="btn mt-2"> Contact</Button>
          <Button className="btn mt-2"> More</Button>
        </ButtonGroup>
      </header>
    </App>
  );
}

export default Home;
