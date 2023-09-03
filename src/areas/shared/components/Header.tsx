import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useStore } from "../hooks";
import { ThemeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react-lite";

function Header() {
  const themeStore = useStore(ThemeStore);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant={themeStore.darkMode ? "dark" : "light"}>
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

export default observer(Header);
