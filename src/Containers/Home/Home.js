import { App } from "./Home.style";

import { Navbar } from "../../Components/Navbar/Navbar";

function Home() {
  return (
    <>
      <App>
        <Navbar />
        <header className="App-header">
          <h3>DEVELOPER MAN X</h3>
          <p className="fs-6">Site on Process...</p>
        </header>
      </App>
    </>
  );
}

export default Home;
