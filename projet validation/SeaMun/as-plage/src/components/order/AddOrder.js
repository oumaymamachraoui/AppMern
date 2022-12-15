import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { addOrder } from '../../JS/actions/OrderAction';

const AddOrder = () => {
    const match = useMatch("/add/:id");

    const reclam = useSelector((state) =>
      match.params._id
        ? state.EndroitReducer.allEndroits.find(
            (endroit) => endroit._id === match.params._id
          )
        : null
    );
    // const reclam = getOneEndroit(match.params.id)
  const dispatch = useDispatch();
  const [newReclamation, setNewReclamation] = useState({
    nom_visiteur: "",
    note: "",
    date_reclamation: Date.now(),
    endroit: reclam._id
  });

  const handleChange = (e) => {
    setNewReclamation({ ...newReclamation, [e.target.name]: e.target.value});
  };

  const add = () => {
    const endroit= reclam._id
    dispatch(addOrder(match.params.id,newReclamation ));
  };
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

export default AddOrder