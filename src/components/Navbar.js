import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
const Navibar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#03242b" }}
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#7b7b7b" }}>ADITHYAN</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/skills" style={{ color: "#7b7b7b" }}>
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
