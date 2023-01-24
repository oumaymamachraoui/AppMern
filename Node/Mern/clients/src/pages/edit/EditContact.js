import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editUser } from "../../JS/actions/Actions";

const EditContact = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const match = useMatch("/edit/:id");
  const handleCHange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const user = useSelector((state) =>
    match.params.id
      ? state.userReducer.users.find(
          (user) => user._id === match.params.id
        )
      : null
  );

  useEffect(() => {
    if (user) setNewUser(user);
  }, [user]);

  const edit = () => {
    dispatch(editUser(match.params.id, newUser));
    navigate("/users");
  };

  return (
    <div style={{ width:"700px", margin:"50px auto" }}>
      <h2> Edit user</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newUser.name}
            onChange={handleCHange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={newUser.email}
            onChange={handleCHange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone"
            name="phone"
            value={newUser.phone}
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
