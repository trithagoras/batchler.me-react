import { Container, Row, Col, Form } from "react-bootstrap";
import "../styles/footer.css";
import githubIcon from "../../../assets/github-mark.png";
import linkedinIcon from "../../../assets/In-Blue-Logo.png.original.png";
import instagramIcon from "../../../assets/Instagram_Glyph_Gradient.png";
import { useStore } from "../hooks";
import { ThemeStore } from "../stores/ThemeStore";
import { observer } from "mobx-react-lite";

function Footer() {
  const themeStore = useStore(ThemeStore)
  return (
    <div className="footer">
      <hr />
      <Container>
        <Row>
          <Col>
            <h2 className="footer-heading">batchler.me</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Corey Batchler</li>
              <li>
                <a href="mailto:corey@batchler.me">corey@batchler.me</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="https://github.com/trithagoras">
                  <img src={githubIcon} alt="github" className="footer-icon" />{" "}
                  trithagoras
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/coreybatchler">
                  <img
                    src={linkedinIcon}
                    alt="linkedIn"
                    className="footer-icon"
                  />{" "}
                  coreybatchler
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/coreybatchler/">
                  <img
                    src={instagramIcon}
                    alt="github"
                    className="footer-icon"
                  />{" "}
                  coreybatchler
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <p>Full-time software engineer; 5th year (ugh) student at QUT</p>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Dark mode"
              checked={themeStore.darkMode}
              onChange={() => themeStore.toggleDarkMode()}
            ></Form.Check>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default observer(Footer);
