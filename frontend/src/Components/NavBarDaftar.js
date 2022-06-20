import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
//import Daftar from "../Pages/Daftar";
const NavBarDaftar = () => {
  return (
    <Navbar>
      <Container fluid>
        <Nav>
          <Link to="/">
            <i class="fa-solid fa-angle-left">
              <label className="flex">Kembali</label>
            </i>
          </Link>
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
  );
};

export default NavBarDaftar;
