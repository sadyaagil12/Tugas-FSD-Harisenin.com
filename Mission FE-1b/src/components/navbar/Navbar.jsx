/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */

import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../navbar/navbar.scss";

function navbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="../asset/logo.png"
            style={{ width: "103.5px", height: "30px", marginRight: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-md-0">
            <Nav.Link className="nav-link" href="#">
              Series
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Film
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Daftar Saya
            </Nav.Link>
          </Nav>

          <Nav className="icon">
            <Image
              src="../asset/icon.png"
              style={{ width: "40px", height: "40px" }}
              roundedCircle
            />
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Akun</NavDropdown.Item>
              <NavDropdown.Item href="#">Help</NavDropdown.Item>
              <NavDropdown.Item href="#">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/login")}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
