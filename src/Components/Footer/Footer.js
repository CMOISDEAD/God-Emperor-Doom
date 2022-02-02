import { FooterBox } from "./Footer.style";

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <div className="container text-center pt-3 sketch">
          <div className="row">
            <div className="col">
              <p className="text-center fs-6">Links</p>
            </div>
            <div className="col">With ❤️ & coffe.</div>
            <div className="col">
              <p className="text-center fs-6">Contact</p>
            </div>
          </div>
        </div>
      </FooterBox>
    </>
  );
};
