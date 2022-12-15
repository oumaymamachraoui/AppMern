import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import { addReclamation } from "../../JS/actions/ReclamationAction";

const AddReclamation = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const [newReclamation, setNewReclamation] = useState({
    nom_visiteur: "",
    note: "",
    date_reclamation: Date.now(),
    nom_endroit: params.id,
  });

  console.log(params.id);

  const handleChange = (e) => {
    setNewReclamation({ ...newReclamation, [e.target.name]: e.target.value });
  };

const navigate= useNavigate()
  const add = () => {
    dispatch(addReclamation(newReclamation, params.id));
    navigate('/endroit')
  };
  console.log(newReclamation);
  return (
    <div>
      <h2> Add Reclamation</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nom visiteur</Form.Label>
          <Form.Control
            type="text"
            placeholder="nom du visiteur"
            name="nom_visiteur"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>note</Form.Label>
          <Form.Control
            type="text"
            placeholder="note"
            name="note"
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Link to="/reclamation"> */}
        <Button variant="primary" type="submit" onClick={add}>
          Add Reclamation
        </Button>
        {/* </Link> */}
      </Form>
    </div>
  );
};

export default AddReclamation;
