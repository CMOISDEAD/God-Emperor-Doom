import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiSass,
  DiNodejs,
  DiNpm,
  DiReact,
  DiGit,
  DiGithub,
  DiLinux,
  DiRust,
  DiPython,
  DiDatabase,
  DiMysql,
} from "react-icons/di";

import { Chart } from "../../Components/Chart/Chart";
import { Icon } from "../../Components/Icon/Icon";
import { AboutBox, IconList } from "./About.style";

const topIcons = [
  { icon: <DiHtml5 />, name: "html" },
  { icon: <DiCss3 />, name: "css" },
  { icon: <DiJavascript />, name: "javascript" },
  { icon: <DiSass />, name: "sass" },
  { icon: <DiNodejs />, name: "nodejs" },
  { icon: <DiNpm />, name: "npm" },
  { icon: <DiReact />, name: "react" },
  { icon: <DiGit />, name: "git" },
  { icon: <DiGithub />, name: "github" },
  { icon: <DiLinux />, name: "linux" },
];

const bottomIcons = [
  { icon: <DiRust />, name: "rust" },
  { icon: <DiPython />, name: "python" },
  { icon: <DiDatabase />, name: "databases" },
  { icon: <DiMysql />, name: "mysql" },
];

export const About = () => {
  return (
    <>
      <div className="bg-light">
        <AboutBox className="container text-start my-4 pt-2">
          <h3 className="fs-2 text-center">About me.</h3>
          <div className="row">
            <div className="col-md-7 col-sm-auto">
              <p className="text-start fs-4 mt-2">Who i am</p>
              Amet nulla impedit expedita corrupti voluptates Quod alias officia
              perferendis odio recusandae! Veniam cum a animi amet delectus,
              repellat Molestiae aspernatur maxime assumenda mollitia similique
              repellendus dolorem? Accusamus necessitatibus ducimus. Amet sit
              fugit voluptatum animi vero. <br />
              Accusantium maxime illum suscipit optio rem tenetur, quo Non
              voluptates dolorem sed eos ut Sit fuga eius quasi blanditiis
              dolore? Itaque aliquam rerum aut!
              <p className="text-start fs-4 mt-2">Main skills</p>
              <IconList className="text-center mt-2">
                <ul>
                  {topIcons.map(({ icon, name }, i) => {
                    return (
                      <li key={i}>
                        <Icon icon={icon} name={name} />
                      </li>
                    );
                  })}
                </ul>
              </IconList>
              <p className="text-start fs-4 mt-2">Extra skills</p>
              <IconList className="text-center mt-2">
                <ul>
                  {bottomIcons.map(({ icon, name }, i) => {
                    return (
                      <li key={i}>
                        <Icon icon={icon} name={name} />
                      </li>
                    );
                  })}
                </ul>
              </IconList>
            </div>
            <div className="col text-start mb-4">
              <Chart />
            </div>
          </div>
        </AboutBox>
      </div>
    </>
  );
};
