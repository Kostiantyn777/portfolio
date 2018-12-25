import React from "react";
import { Row, Col, Icon, BackTop } from "antd";
import "./FooterContent.css";

const Footer = props => {
  return (
    <footer className="footerfull">
      <Row type="flex" className="footer-content">
        <Col span={24}>
          <a
            href="https://www.linkedin.com/in/kostiantyn-borodach-4a3859152/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_link padright"
          >
            <Icon type="linkedin" style={{ fontSize: 18 }} />
            <span className="footer_text"> Linkedin</span>
          </a>
          <a
            href="https://github.com/Kostiantyn777"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_link padright"
          >
            <Icon type="github" style={{ fontSize: 18 }} />
            <span className="footer_text"> Github</span>
          </a>
          <span className="footer_link">
            <Icon type="copyright" style={{ fontSize: 15 }} /> 2019 Kostiantyn Borodach

          </span>
        </Col>
      </Row>
      <BackTop visibilityHeight="1000" />
    </footer>
  );
};

export default Footer;
