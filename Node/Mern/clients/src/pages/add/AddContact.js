import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addUser } from "../../JS/actions/Actions";
import {Link} from 'react-router-dom'
const AddContact = () => {
  const dispatch = useDispatch();
  const [newUser , setNewUser] = useState({name:"", email:"", phone:""})

  const handleChange =(e)=>{
    setNewUser({...newUser , [e.target.name]: e.target.value})
  }

  const add=()=>{
    dispatch(addUser(newUser)) 
  }
  return (
  <div style={{ width:"700px", margin:"50px auto" }}>
    <h2> Add new user</h2>
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
        Add user
      </Button>
      </Link>
    </Form>
  </div>
  );
};

export default AddContact;
