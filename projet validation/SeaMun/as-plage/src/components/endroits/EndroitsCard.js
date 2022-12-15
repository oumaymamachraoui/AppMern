import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteEndroit } from "../../JS/actions/EndroitAction";
const EndroitsCard = ({ endroit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{endroit.nom}</Card.Title>
          <Card.Text>{endroit.nom_plage}</Card.Text>
          <Card.Text>{endroit.superficie}</Card.Text>
          <Card.Text>{endroit.nbre_parasol}</Card.Text>
          <Card.Text>{endroit.prix}</Card.Text>
          <Card.Text>{endroit.type_lot}</Card.Text>
          {isAuth ? (
            <div>
              <Button onClick={() => navigate(`/edit/${endroit._id}`)}>
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteEndroit(endroit._id))}
              >
                Delete
              </Button>
            </div>
          ) : null}
          <Button onClick={()=> navigate(`/reclamation/${endroit._id}`)}> reclamation</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EndroitsCard;
