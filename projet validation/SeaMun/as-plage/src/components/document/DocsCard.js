import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc } from "../../JS/actions/DocumentAction";

const DocsCard = ({ doc, setCurrentId }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <div>
      <ul>
        <li>{doc.description}</li>
      </ul>

      {isAuth ? (
        <div>
          {" "}
          <button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(doc._id)}
          >
            edit
          </button>
          <button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteDoc(doc._id))}
          >
            Delete
          </button>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default DocsCard;
