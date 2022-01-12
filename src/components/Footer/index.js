import { Col, Divider, Row } from "antd";
import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer padding-main">
      <Row justify="center">
        <Col md={{ span: 8 }} xs={{ span: 24 }}>
          <img
            src={
              "https://cdn-cepgk.nitrocdn.com/xMcYoPOvHRQJZJKijdREryQeGVQhFBks/assets/static/optimized/rev-82afaa3/wp-content/uploads/2021/10/New-Logo.png"
            }
            alt="icon"
            className="icon-width"
          />
          <h4>Mail: office@masara.ro</h4>
          <h4>Tel: +40 (786) 513 433</h4>
        </Col>
        <Col md={{ span: 8 }} xs={{ span: 24 }}>
          <h3>LINK-URI RAPIDE</h3>
          <h3>TERMENI SI CONDITII</h3>
          <h3>POLITICĂ DE RETUR</h3>
          <h3>DECLARATIE CONFORMITATE SI GARANTIE</h3>
          <h3>ANPC</h3>
          <Divider />
        </Col>
        <Col md={{ span: 8 }} xs={{ span: 24 }}>
          <h3>FII LA CURENT CU ULTIMELE NOUTATI</h3>
          <Divider />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
