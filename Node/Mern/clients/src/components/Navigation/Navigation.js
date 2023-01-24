import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rest API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/">home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/users">users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/add">add </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
