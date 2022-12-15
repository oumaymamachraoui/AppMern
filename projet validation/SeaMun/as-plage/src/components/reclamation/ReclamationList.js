import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEndroit, getOneEndroit } from "../../JS/actions/EndroitAction";
import { getReclamations } from "../../JS/actions/ReclamationAction";
import Loaading from "../loaaading/Loaading";
import ReclamationTable from "./ReclamationTable";

const ReclamationList = () => {
  const dispatch = useDispatch();
  
  const reclam = useSelector((state) => state.ReclamationReducer.reclamation);
  const load = useSelector((state) => state.ReclamationReducer.load);

  useEffect(() => {
    dispatch(getReclamations());
    
  }, [dispatch]);

  // const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      
      {load ? (
        <Loaading />
      ) : (
        reclam?.map((el) => (
          <ReclamationTable reclamations={el} key={el._id} />
        )) 
         
      )}
     

    </div>
  );
};

export default ReclamationList;
