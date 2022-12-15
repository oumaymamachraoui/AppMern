import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoc, updateDoc } from "../../../JS/actions/DocumentAction";

const Form = ({ currentId, setCurrentId }) => {
  const [docData, setDocData] = useState({ description: "" });
  const doc = useSelector((state) =>
    currentId ? state.docs.find((doc) => doc._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (doc) setDocData(doc);
  }, [doc]);

  const clear = () => {
    setCurrentId(0);
    setDocData({ description: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createDoc(docData));
      clear();
    } else {
      dispatch(updateDoc(currentId, docData));
      clear();
    }
  };

  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <div>
      {isAuth ? (
        <div>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <label> {currentId ? "Editing" : "Creating a Memory"} </label>

            <input
              name="description"
              value={docData.description}
              onChange={(e) =>
                setDocData({ ...docData, description: e.target.value })
              }
            ></input>

            <button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </button>

            <button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
