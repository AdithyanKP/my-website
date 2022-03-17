import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
const Navibar = () => {
  return (
    <Navbar bg="info" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://i.pinimg.com/originals/11/74/21/1174215797dec302c416c52eaac5fc46.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
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
