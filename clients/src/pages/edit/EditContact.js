import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editContact } from "../../JS/actions/Actions";

const EditContact = () => {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const match = useMatch("/edit/:id");
  const handleCHange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const edit = () => {
    dispatch(editContact(match.params.id, newContact));
    navigate(-1);
  };

  return (
    <div>
      <h2> Edit contact</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newContact.name}
            onChange={handleCHange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={newContact.email}
            onChange={handleCHange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone"
            name="phone"
            value={newContact.phone}
            onChange={handleCHange}
          />
        </Form.Group>
        <Link to="/users">
          <Button variant="primary" type="submit" onClick={edit}>
            Edit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default EditContact;
