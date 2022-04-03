import { Card } from "../../Components/Cards/Card";

import { Project } from "./Projects.style";

export const Projects = () => {
  return (
    <>
      <Project className="text-center pb-4">
        <h3 className="fs-4 text-white pt-3">Projects.</h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 pb-2">
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="Todo."
                text="Application to manage events and time."
                repo="a"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="League API."
                text="League of Legends data dashboard."
                repo="b"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="Writer forum."
                text="A blog for writers."
                repo="c"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="Dynamic starpage"
                text="A Count manager for money and related shit."
                repo="d"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="Markdown editor."
                text="Markdown editor with full javascript technology."
                repo="e"
              />
            </div>
          </div>
        </div>
      </Project>
    </>
  );
};
