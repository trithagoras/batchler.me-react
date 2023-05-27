import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="site-title navbar-brand navbar-main">
              batchler.me
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link to={"/about"} className="navbar-brand navbar-main">
              About
            </Link>
            <Link to={"/posts"} className="navbar-brand navbar-main">
              Posts
            </Link>
            <Link to={"/projects"} className="navbar-brand navbar-main">
              Projects
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
}

export default Header;
