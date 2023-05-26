import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { darkModeClass, darkModeSaved } from "../utils";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(darkModeSaved());

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Outlet context={{ darkMode, setDarkMode }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainLayout;
