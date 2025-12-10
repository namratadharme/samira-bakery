import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar
        varient="dark"
        expand="sm"
        sticky="top"
        style={{ backgroundColor: "#9bcfcc", height: "100px" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="my-nav" />
          <Navbar.Collapse id="my-nav">
            <Nav className="mx-auto nav-bar">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                About US
              </NavLink>
              <NavLink
                to="/userinfo"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                UserInfo
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </Nav>
            <button>ONLINE MENU</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
