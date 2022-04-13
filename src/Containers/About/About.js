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

import { AboutBox, Picture, IconList } from "./About.style";

export const About = () => {
  return (
    <>
      <div className="bg-light">
        <AboutBox className="container text-center mt-3 mb-3 pt-2">
          <h3 className="fs-2">About me.</h3>
          <div className="row">
            <div className="col-md-7 col-sm-auto">
              <p className="text-start fs-4 mt-2">Who i am:</p>
              Amet nulla impedit expedita corrupti voluptates Quod alias officia
              perferendis odio recusandae! Veniam cum a animi amet delectus,
              repellat Molestiae aspernatur maxime assumenda mollitia similique
              repellendus dolorem? Accusamus necessitatibus ducimus. Amet sit
              fugit voluptatum animi vero. <br />
              Accusantium maxime illum suscipit optio rem tenetur, quo Non
              voluptates dolorem sed eos ut Sit fuga eius quasi blanditiis
              dolore? Itaque aliquam rerum aut!
              <p className="text-start fs-4 mt-2">Main skills:</p>
              <IconList className="text-center mt-2">
                <ul>
                  <li>
                    <DiHtml5 />
                  </li>
                  <li>
                    <DiCss3 />
                  </li>
                  <li>
                    <DiJavascript />
                  </li>
                  <li>
                    <DiSass />
                  </li>
                  <li>
                    <DiNodejs />
                  </li>
                  <li>
                    <DiNpm />
                  </li>
                  <li>
                    <DiReact />
                  </li>
                  <li>
                    <DiGit />
                  </li>
                  <li>
                    <DiGithub />
                  </li>
                  <li>
                    <DiLinux />
                  </li>
                </ul>
              </IconList>
              <p className="text-start fs-4 mt-2">Extra skills:</p>
              <IconList className="text-center mt-2">
                <ul>
                  <li>
                    <DiRust />
                  </li>
                  <li>
                    <DiPython />
                  </li>
                  <li>
                    <DiDatabase />
                  </li>
                  <li>
                    <DiMysql />
                  </li>
                </ul>
              </IconList>
            </div>
            <Picture className="col d-none d-md-block profile text-center">
              DOOM.
            </Picture>
          </div>
        </AboutBox>
      </div>
    </>
  );
};
