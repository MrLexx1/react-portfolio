import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Basir" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://twitter.com">
                <img src={navIcon1} alt="Facebook" />
              </a>
              <a href="https://facebook.com">
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a href="https://www.twitter.com/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
