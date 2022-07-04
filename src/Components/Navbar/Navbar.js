import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Brand, Nav, Social } from "./Navbar.style";

export const Navbar = () => {
  return (
    // Note: Dont work the span tag.
    <Nav className="navbar">
      <Brand className="navbar-brand" href="#">
        DD<span className="sketch">X</span>
      </Brand>
      <Social>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter className="icon-social" />
          <span> twitter</span>
          <br />
        </a>
        <a href="https://youtube.com" target="_blank">
          <FaYoutube className="icon-social" />
          <span> youtube</span>
          <br />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedinIn className="icon-social" />
          <span> Facebook</span>
          <br />
        </a>
      </Social>
    </Nav>
  );
};
