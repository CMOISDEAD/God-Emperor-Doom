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
                    <div className="icon text-center">
                      <DiHtml5 />
                      <span>Html5</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiCss3 />
                      <span>Css3</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiJavascript />
                      <span>Javascript</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiSass />
                      <span>Sass</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiNodejs />
                      <span>NodeJs</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiNpm />
                      <span>Npm</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiReact />
                      <span>css</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiGit />
                      <span>Git</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiGithub />
                      <span>GitHub</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiLinux />
                      <span>Linux</span>
                    </div>
                  </li>
                </ul>
              </IconList>
              <p className="text-start fs-4 mt-2">Extra skills:</p>
              <IconList className="text-center mt-2">
                <ul>
                  <li>
                    <div class="icon">
                      <DiRust />
                      <span>Rust</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiPython />
                      <span>Python</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiDatabase />
                      <span>Databases</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <DiMysql />
                      <span>Mysql</span>
                    </div>
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
