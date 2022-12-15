import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEndroit } from "../../JS/actions/EndroitAction";
import Loaading from "../loaaading/Loaading";
import EndroitsCard from "./EndroitsCard";

const EndroitsList = () => {
  const dispatch = useDispatch();
  const end = useSelector((state) => state.EndroitReducer.allEndroits);
  const load = useSelector((state) => state.EndroitReducer.load);
  useEffect(() => {
    dispatch(getEndroit());
  }, [dispatch]);
  console.log(end);
  console.log(load);
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      {isAuth ? (
        <Button onClick={() => navigate("/add")}> add</Button>
      ) : null}

      {load ? (
        <Loaading/>
      ) : (
        end?.map((el) => <EndroitsCard endroit={el} key={el._id} />)
      )}
    </div>
  );
};

export default EndroitsList;
