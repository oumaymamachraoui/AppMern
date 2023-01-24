import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../JS/actions/Actions";
const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const dispatch= useDispatch()
  return (
    <div>
      <Card style={{ width: "17rem" , margin:"10px"}}>
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Button style={{marginRight:"5px"}} onClick={()=> navigate(`/edit/${user._id}`)} >Edit</Button>
          <Button variant="danger" onClick={()=> dispatch(deleteUser(user._id))} >Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
