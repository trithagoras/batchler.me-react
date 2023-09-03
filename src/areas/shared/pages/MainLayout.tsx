import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks";
import { ThemeStore } from "../stores/ThemeStore";

function MainLayout() {
  const themeStore = useStore(ThemeStore);
  return (
    <div className={themeStore.darkMode ? "dark-mode" : ""}>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default observer(MainLayout);
