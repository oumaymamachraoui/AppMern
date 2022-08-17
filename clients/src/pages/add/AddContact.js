import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addContact } from "../../JS/actions/Actions";
import {Link} from 'react-router-dom'
const AddContact = () => {
  const dispatch = useDispatch();
  const [newContact , setNewContact] = useState({name:"", email:"", phone:""})

  const handleChange =(e)=>{
    setNewContact({...newContact , [e.target.name]: e.target.value})
  }

  const add=()=>{
    dispatch(addContact(newContact)) 
  }
  return (
  <div>
    <h2> Add new contact</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone" name="phone" onChange={handleChange} />
      </Form.Group>
      <Link to="/users" >
      <Button variant="primary" type="submit" onClick={add}>
        Add Contact
      </Button>
      </Link>
    </Form>
  </div>
  );
};

export default AddContact;
