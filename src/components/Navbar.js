import React from "react";

import { Container, Navbar } from "react-bootstrap";
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
          <h3 style={{ color: "#7b7b7b" }}>ADITHYAN K P</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navibar;
