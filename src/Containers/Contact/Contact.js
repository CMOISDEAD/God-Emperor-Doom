import { CardBox, Side } from "./Contact.style";
import { Card } from "../../Components/Card/Card";

export const Contact = () => {
  return (
    <>
      <h3 className="text-center">Contact.</h3>
      <CardBox>
        <Side className="sketch aside first-aside">Click One</Side>
        <Card
          title="LinkedIn"
          background="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5579402.jpg&f=1&nofb=1"
          year="2020"
          letter="D"
          description="Lorem Ipsum Dolorum."
        />
        <Card
          title="Instagram"
          background="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5579402.jpg&f=1&nofb=1"
          year="2021"
          letter="D"
          description="Lorem Ipsum Dolorum."
        />
        <Card
          title="Twitter"
          background="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5579402.jpg&f=1&nofb=1"
          year="2022"
          letter="X"
          description="Lorem Ipsum Dolorum."
        />
        <Side className="sketch aside">Click One</Side>
      </CardBox>
    </>
  );
};
