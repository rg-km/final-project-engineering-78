import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4">
        <Container fluid>
          <Row>
            <Col className="col-12 col-md-3 list-unstyled">
              <Image src="./coba2.png" className="mx-2" width="150" />
              <li className="font weight-bold mb-2">
                <h2>EasyPerpus</h2>
              </li>
              <li className="text-center">Jl.xxx</li>
            </Col>
            <Col className="col-12 col-md-3 list-unstyled">
              <li className="font weight-bold mb-2">
                <h3>EasyPerpus</h3>
              </li>
              <li className="text-center">Ini yang dicoba 2x</li>
            </Col>
            <Col className="col-12 col-md-3 list-unstyled">
              <li className="font weight-bold mb-2">
                <h3>EasyPerpus</h3>
              </li>
              <li className="text-center">Ini yang dicoba 2x</li>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
