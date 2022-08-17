import React, { useState } from "react";
import { Form , Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const EditContact = () => {
  const dispatch = useDispatch();
  const [newContact , setNewContact] = useState({name:"", email:"", phone:""})



  return (
  <div>
    <h2> Add new contact</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone" name="phone" />
      </Form.Group>
      <Link to="/users" >
      <Button variant="primary" type="submit" >
        Add Contact
      </Button>
      </Link>
    </Form>
  </div>
  )
};

export default EditContact;
