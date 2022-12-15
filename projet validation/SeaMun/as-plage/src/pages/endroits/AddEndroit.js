import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEndroit } from "../../JS/actions/EndroitAction";
import { Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
const AddEndroit = () => {
  const dispatch = useDispatch();
  const [newEndroit, setNewEndroit] = useState({
    nom: "",
    nom_plage: "",
    superficie: "",
    nbre_parasol: "",
    longitude: "",
    latitude: "",
    prix: "",
    type_lot: "",
  });

  const handleChange = (e) => {
    setNewEndroit({ ...newEndroit, [e.target.name]: e.target.value });
  };

  const add = () => {
    dispatch(addEndroit(newEndroit));
  };
  return (
    <div>
      <h2> Add new endroit</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nom </Form.Label>
          <Form.Control
            type="text"
            placeholder="nom"
            name="nom"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nom plage</Form.Label>
          <Form.Control
            type="text"
            placeholder="nom du plage"
            name="nom_plage"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>superficie</Form.Label>
          <Form.Control
            type="number"
            placeholder="superficie"
            name="superficie"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nbre parasol</Form.Label>
          <Form.Control
            type="number"
            placeholder="nbre parasol"
            name="nbre_parasol"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>prix</Form.Label>
          <Form.Control
            type="number"
            placeholder="prix"
            name="prix"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>type lot</Form.Label>
          <Form.Control
            type="text"
            placeholder="type lot"
            name="type_lot"
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>latitude</Form.Label>
          <Form.Control
            type="number"
            placeholder="atitude"
            name="latitude"
            onChange={handleChange}
          />
        </Form.Group>

        <Link to="/endroit">
          <Button variant="primary" type="submit" onClick={add}>
            Add Endroit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddEndroit;
