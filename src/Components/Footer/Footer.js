import { FooterBox } from "./Footer.style";

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <div className="container text-center p-3">
          <div className="row">
            <div className="col">
              <ul>
                <p className="text-center fs-6">Links</p>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
              </ul>
            </div>
            <div className="col">
              <div className="trademark">
                With ❤️ & coffe.
                <div className="barcode">DROPDEAD</div>
              </div>
            </div>
            <div className="col">
              <ul>
                <p className="text-center fs-6">Contact</p>
                <li>
                  <a href="/lag">Email</a>
                </li>
                <li>
                  <a href="/lag">Number</a>
                </li>
                <li>
                  <a href="/lag">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FooterBox>
    </>
  );
};
