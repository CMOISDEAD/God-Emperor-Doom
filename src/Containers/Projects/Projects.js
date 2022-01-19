import { Card } from "../../Components/Cards/Card";

import { Project } from "./Projects.style";

export const Projects = () => {
  return (
    <>
      <Project className="text-center">
        <h3 className="fs-4 text-white">Projects.</h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 pb-2">
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="Todo"
                text="Application to manage events and time."
                repo="a"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="LeagueAPI"
                text="League of Legends data dashboard."
                repo="b"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="WriterForum"
                text="A blog for writers."
                repo="c"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="CountManager"
                text="A Count manager for money and related shit."
                repo="d"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="HOME"
                text="Theres no way like home."
                repo="e"
              />
            </div>
          </div>
        </div>
      </Project>
    </>
  );
};
