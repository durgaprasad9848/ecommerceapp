import React from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div >
     
     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Store">Store</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
             
    

      <div className="card">
        <section>
          <h1  > The Generics</h1>
        </section>
      </div>
    </div>
  );
};
export default Navigation;
