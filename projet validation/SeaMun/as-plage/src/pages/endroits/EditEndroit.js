import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import {
  editEndroit,
  getEndroit
} from "../../JS/actions/EndroitAction";

const EditEndroit = () => {
  const match = useMatch("/edit/:id");

  const dispatch = useDispatch();
  const [newEndroit, setNewEndroit] = useState({});
  const endroit = useSelector((state) =>
    match.params.id
      ? state.EndroitReducer.allEndroits.find(
          (endroit) => endroit._id === match.params.id
        )
      : null
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (endroit) setNewEndroit(endroit);
  }, [endroit]);


  const handleChange = (e) => {
    e.preventDefault();
    setNewEndroit({ ...newEndroit, [e.target.name]: e.target.value });
  };
  const edit = async (e) => {
    e.preventDefault();
    dispatch(editEndroit(match.params.id, newEndroit));
    navigate(-1);
  };

  return (
    <div>
      <h2> Edit endroit</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nom </Form.Label>
          <Form.Control
            type="text"
            name="nom"
            value={newEndroit.nom}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nom plage</Form.Label>
          <Form.Control
            type="text"
            value={newEndroit.nom_plage}
            name="nom_plage"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>superficie</Form.Label>
          <Form.Control
            type="number"
            name="superficie"
            onChange={handleChange}
            value={newEndroit.superficie}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nbre parasol</Form.Label>
          <Form.Control
            type="number"
            placeholder="nbre parasol"
            name="nbre_parasol"
            value={newEndroit.nbre_parasol}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>prix</Form.Label>
          <Form.Control
            type="number"
            name="prix"
            value={newEndroit.prix}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>type lot</Form.Label>
          <Form.Control
            type="text"
            name="type_lot"
            value={newEndroit.type_lot}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>longitude</Form.Label>
          <Form.Control
            type="number"
            placeholder="longitude"
            name="longitude"
            onChange={handleChange}
            value={newEndroit.longitude}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>latitude</Form.Label>
          <Form.Control
            type="number"
            value={newEndroit.latitude}
            name="latitude"
            onChange={handleChange}
          />
        </Form.Group>

        <Link to="/endroit">
          <Button variant="primary" type="submit" onClick={edit}>
            Add Endroit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default EditEndroit;
