import { Icons } from "../../Components/Icons/Icons";

import { AboutBox, Picture, IconList } from "./About.style";

export const About = () => {
  return (
    <>
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
            voluptates dolorem sed eos ut Sit fuga eius quasi blanditiis dolore?
            Itaque aliquam rerum aut!
            <p className="text-start fs-4 mt-2">Main skills:</p>
            <IconList className="text-center mt-2">
              <ul>
                <li>
                  <Icons icon="fab fa-html5" name="html5" />
                </li>
                <li>
                  <Icons icon="fab fa-css3-alt" name="css3" />
                </li>
                <li>
                  <Icons icon="fab fa-sass" name="sass" />
                </li>
                <li>
                  <Icons icon="fab fa-js" name="javascript" />
                </li>
                <li>
                  <Icons icon="fab fa-react" name="react" />
                </li>
                <li>
                  <Icons icon="fab fa-node-js" name="nodejs" />
                </li>
                <li>
                  <Icons icon="fab fa-git-alt" name="git" />
                </li>
                <li>
                  <Icons icon="fab fa-github-alt" name="github" />
                </li>
                <li>
                  <Icons icon="fab fa-linux" name="linux" />
                </li>
                <li>
                  <Icons icon="fab fa-npm" name="npm" />
                </li>
              </ul>
            </IconList>
            <p className="text-start fs-4 mt-2">Extra skills:</p>
            <IconList className="text-center mt-2">
              <ul>
                <li>
                  <a href="/">Rust</a>
                </li>
                <li>
                  <a href="/">Python</a>
                </li>
                <li>
                  <a href="/">Databases</a>
                </li>
                <li>
                  <a href="/">SQL</a>
                </li>
              </ul>
            </IconList>
          </div>
          <Picture className="col d-none d-md-block profile text-center">
            DOOM.
          </Picture>
        </div>
      </AboutBox>
    </>
  );
};
