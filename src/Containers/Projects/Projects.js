import { Card } from "../../Components/Card/Card";
import { Project, CardBox, Side } from "./Projects.style";

export const Projects = () => {
  return (
    <>
      <Project className="text-center">
        <h3 className="fs-4 text-white">Projects.</h3>
        <CardBox>
          <Side className="sketch aside first-aside">Click One</Side>
          <Card
            title="Lorem."
            background="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5579402.jpg&f=1&nofb=1"
            year="2020"
            letter="D"
            description="Lorem Ipsum Dolorum."
          />
          <Card
            title="Ipsum."
            background="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5579402.jpg&f=1&nofb=1"
            year="2021"
            letter="D"
            description="Lorem Ipsum Dolorum."
          />
          <Card
            title="Dolorum."
            background="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5579402.jpg&f=1&nofb=1"
            year="2022"
            letter="X"
            description="Lorem Ipsum Dolorum."
          />
          <Side className="sketch aside">Click One</Side>
        </CardBox>
      </Project>
    </>
  );
};
