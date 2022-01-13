import { Brand, Nav, Social } from "./Navbar.style";

export const Navbar = () => {
  return (
    <Nav className="navbar">
      <Brand className="navbar-brand" href="#">
        DDX
      </Brand>
      <Social>
        <a href="google.com">
          <i className="bi bi-twitter">
            <span> twitter</span>
          </i>
          <br />
        </a>
        <a href="google.com">
          <i className="bi bi-twitch">
            <span> Twitch</span>
          </i>
          <br />
        </a>
        <a href="google.com">
          <i className="bi bi-facebook">
            <span> Facebook</span>
          </i>
          <br />
        </a>
      </Social>
    </Nav>
  );
};
