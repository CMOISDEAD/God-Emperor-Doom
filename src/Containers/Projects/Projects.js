import { Card } from "../../Components/Cards/Card";

import { Project } from "./Projects.style";

import Landing from "../../Assets/markdown.png";
import Startpage from "../../Assets/Startpage.png";
import CodeEditor from "../../Assets/codeeditor.png";
import LolApi from "../../Assets/Lol.jpg";

export const Projects = () => {
  return (
    <>
      <Project className="text-center pb-4">
        <h3 className="fs-4 text-white pt-3">Projects.</h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 pb-2">
            <div className="col">
              <Card
                img={CodeEditor}
                title="Markdown Editor"
                text="A markdown editor desktop application"
                repo="Operation-Doomsday-Editor"
              />
            </div>
            <div className="col">
              <Card
                img={LolApi}
                title="League API."
                text="League of Legends data dashboard."
                repo="DROPSTATS"
              />
            </div>
            <div className="col">
              <Card
                img={Landing}
                title="Landing page."
                text="Landing page written in vue"
                repo="Doomsday-webiste"
              />
            </div>
            <div className="col">
              <Card
                img={Startpage}
                title="Dynamic starpage"
                text="A fully customizable startpage"
                repo="startpage"
              />
            </div>
            <div className="col">
              <Card
                img="https://fondosmil.com/fondo/5046.jpg"
                title="Blog"
                text="Blog app written in next.js"
                repo="doom-blog"
              />
            </div>
          </div>
        </div>
      </Project>
    </>
  );
};
