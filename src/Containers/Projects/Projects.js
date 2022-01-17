import { Card } from "../../Components/Card/Card";
import { Project, CardBox, Side } from "./Projects.style";

export const Projects = () => {
  return (
    <>
      <Project className="text-center">
        <h3 className="fs-4 text-white">Projects.</h3>
        <CardBox>
          <Side className="sketch aside first-aside">Click One</Side>
          <Card year="2021" letter="D" description="Lorem Ipsum Dolorum." />
          <Card year="2021" letter="D" description="Lorem Ipsum Dolorum." />
          <Card year="2021" letter="X" description="Lorem Ipsum Dolorum." />
          <Side className="sketch aside">Click One</Side>
        </CardBox>
      </Project>
    </>
  );
};
