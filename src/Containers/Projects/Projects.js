import { DiReact, DiBootstrap } from "react-icons/di";
import {
  SiElectron,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

import { Card } from "../../Components/Cards/Card";

import { Project } from "./Projects.style";

import Landing from "../../Assets/markdown.png";
import Startpage from "../../Assets/Startpage.png";
import CodeEditor from "../../Assets/codeeditor.png";
import LolApi from "../../Assets/Lol.jpg";
import Blog from "../../Assets/doom-blog.png";

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
                icons={[
                  <DiReact />,
                  <SiElectron />,
                  <SiTypescript />,
                  <DiBootstrap />,
                ]}
              />
            </div>
            <div className="col">
              <Card
                img={LolApi}
                title="League API."
                text="League of Legends data dashboard."
                repo="DROPSTATS"
                icons={[<DiReact />, <DiBootstrap />]}
              />
            </div>
            <div className="col">
              <Card
                img={Landing}
                title="Landing page."
                text="Landing page written in vue"
                repo="Doomsday-webiste"
                icons={[<FaVuejs />, <SiTailwindcss />]}
              />
            </div>
            <div className="col">
              <Card
                img={Startpage}
                title="Dynamic starpage"
                text="A fully customizable startpage"
                repo="startpage"
                icons={[<DiReact />, <DiBootstrap />]}
              />
            </div>
            <div className="col">
              <Card
                img={Blog}
                title="Blog"
                text="Blog app written in next.js"
                repo="doom-blog"
                icons={[<SiNextdotjs />, <DiReact />, <SiTailwindcss />]}
              />
            </div>
          </div>
        </div>
      </Project>
    </>
  );
};
