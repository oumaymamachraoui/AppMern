import React from "react";
import { Nav } from "react-bootstrap";
const Navigation = () => {
  return (
    <div>
      <Nav>
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
    </div>
  );
};

export default Navigation;
