import React from "react";
import logoImg from "../images/SocialNet.jpg";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="logo"
            src={logoImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Social Network
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link className="navbarLinks" to="/">
              Home
            </Link>
            <Link className="navbarLinks" to="/messages">
              Messages
            </Link>
            <Link className="navbarLinks" to="/profile">
              Profile
            </Link>
            <Link className="navbarLinks" to="/settings">
              Settings
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
