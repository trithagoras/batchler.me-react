import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header({darkMode}: {darkMode: boolean}) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant={darkMode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="site-title navbar-brand navbar-main">
              batchler.me
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{width: "100%"}}>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
}

export default Header;
