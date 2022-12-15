import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getEndroit, getOneEndroit } from "../../JS/actions/EndroitAction";
import { getReclamations } from "../../JS/actions/ReclamationAction";

const ReclamationTable = ({ reclamations}) => {
  const endroit = useSelector((state) => state.EndroitReducer.allEndroits);
  // const f_endroit = endroit.find((endroit) => endroit._id == reclamations.nom_endroit)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneEndroit(reclamations.nom_endroit));
  }, [dispatch]);

  console.log(getOneEndroit(reclamations.nom_endroit))

  return (
    <div>
      {/* <Table striped bordered hover>
        <tr>
          <th>nom plage </th>
          <th>nom endroit </th>
          <th>nom visiteur</th>
          <th>note</th>
          <th>date de reclamation</th>
          <th>resolu ou pas </th>
        </tr>

        <tr>
          {/* <td>{reclamations.nom_endroit.map((el)=>(el.nom_plage))}</td>
          <td>{reclamations.nom_endroit.map((el)=>(el.nom))}</td> */}

          {/* <td>{endroit.nom_plage}</td> */}
          
          {/* <td>{end.find((el)=>el._id== reclamations.nom_endroit).map((el)=> el.nom)}</td> */}
{/* 
          <td>{reclamations.nom_visiteur}</td>
          <td>{reclamations.note}</td>
          <td>{reclamations.date_reclamation}</td>
          <td>{reclamations.resolu ? <h6>ok</h6> : <h6>non</h6>}</td>
        </tr>
      </Table> */} 
      <ul>
        {/* <li>{endroit.nom_plage}</li> */}
        {/* <li>{()=>(dispatch(getOneEndroit(el.nom_endroit)))}</li> */}
        <li>{endroit.map((el) => el.nom)}</li>
        <li>{reclamations.nom_visiteur}</li>
        <li>{reclamations.note}</li>
        <li>{reclamations.date_reclamation}</li>
        <li>{reclamations.resolu ? <h6>ok</h6> : <h6>non</h6>}</li>
      </ul>
      
    </div>
  );
};

export default ReclamationTable;
