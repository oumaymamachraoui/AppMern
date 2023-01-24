import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../JS/actions/Actions";
import UserCard from "../userCard/UserCard";
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const load = useSelector((state) => state.userReducer.load);

  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div style={{display:"flex" , margin:"20px"}}>
      {load ? <p>Loading</p>:
        users.map((el) => <UserCard user={el} key={el._id} />)
      }
    </div>
  );
};

export default UserList;
