/* eslint-disable react/react-in-jsx-scope */
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../navbar/navbar.scss";

function NavbarComponent() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Mengambil nama pengguna yang sedang login dari localStorage
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(`user_${currentUser}`));
      if (userData) {
        setUserName(userData.name); // Ambil nama pengguna
      }
    }
  }, []);

  // Fungsi untuk menghapus akun dari localStorage
  const deleteAccount = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus akun?");
    if (confirmed) {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        localStorage.removeItem(`user_${currentUser}`); // Hapus akun berdasarkan nama pengguna
        localStorage.removeItem("currentUser"); // Hapus currentUser
        alert("Akun telah dihapus.");
        navigate("/regis");
      }
    } else {
      alert("Penghapusan akun dibatalkan.");
    }
  };

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
          <Nav className="mb-2 me-auto mb-md-0">
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
            <NavDropdown>
              <NavDropdown.Item href="#">
                {userName || "Pengguna"}
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Help</NavDropdown.Item>
              <NavDropdown.Item href="#">Setting</NavDropdown.Item>
              <NavDropdown.Item onClick={deleteAccount}>
                Hapus Akun
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("currentUser"); // Hapus informasi pengguna yang sedang login
                  navigate("/login");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
