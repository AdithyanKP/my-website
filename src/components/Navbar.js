import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
const Navibar = () => {
  return (
    <Navbar style={{ backgroundColor: "white" }} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <h3>ADITHYAN</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
