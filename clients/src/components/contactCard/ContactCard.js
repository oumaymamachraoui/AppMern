import React from "react";
import { Button, Card } from "react-bootstrap";
const ContactCard = ({ contact }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
        />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.email}</Card.Text>
          <Card.Text>{contact.phone}</Card.Text>
          <Button >Edit</Button>
          <Button variant="danger" >Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
