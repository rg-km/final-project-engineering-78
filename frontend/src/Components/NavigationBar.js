import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
  Offcanvas,
  Modal,
  Image,
} from "react-bootstrap";
//import Daftar from "../Pages/Daftar";
const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return [false].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Nav>
          <Navbar.Brand className="">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Link to="/" style={{ color: "black", fontWeight: "600"}} className="mx-2">Easy Perpus</Link>
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                EasyPerpus
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Button variant="primary" onClick={handleShow}>
                  Login
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Title className="text-center">Login</Modal.Title>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlEmail"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          id="email"
                          type="email"
                          placeholder="Ketik Email anda"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          id="password"
                          type="password"
                          placeholder="Ketik Password anda"
                        />
                      </Form.Group>
                      <Nav.Link to="/">Lupa Password?</Nav.Link>
                      <Form.Group className="text-center">
                        <Button variant="primary" onClick={handleClose}>
                          Masuk
                        </Button>
                      </Form.Group>
                      <Form.Group className="text-center">
                        <p>
                          Belum punya akun?
                          <Link to="/register">Daftar</Link>
                        </p>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className="text-center"></Modal.Footer>
                </Modal>
                <Nav.Link href="/register">
                  <i class="fa-solid fa-angle-right"></i> Daftar
                </Nav.Link>
                <Nav.Link href="#action2">
                  <i class="fa-solid fa-angle-right"></i> Leaderboard Pustaka
                </Nav.Link>
                <Link to="/profile">
                  <i class="fa-solid fa-angle-right"></i> Profile Saya
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Nav>
        <Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  ));
};

export default NavigationBar;
