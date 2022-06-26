import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
  Offcanvas,
  Image,
} from "react-bootstrap";
//import Daftar from "../Pages/Daftar";
const NavigationBarUser = () => {
  return [false].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Nav>
          <Navbar.Brand>
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
                <Link to="/profile">
                  <i class="fa-solid fa-angle-right"></i> Profile Saya
                </Link>
                <Link to="#action2">
                  <i class="fa-solid fa-angle-right"></i> Riwayat Peminjaman
                </Link>
                <Link to="/bookSaved">
                  <i class="fa-solid fa-angle-right"></i> Book Saved
                </Link>
                <Link to="/leaderboard">
                  <i class="fa-solid fa-angle-right"></i> Leaderboard Pustaka
                </Link>
                <Link to="">
                  <i class="fa-solid fa-angle-right"></i> Logout
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

export default NavigationBarUser;
