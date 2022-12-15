import React from "react";
import { useSelector } from "react-redux";
import DocsCard from "./DocsCard";

const DocsList = ({ setCurrentId }) => {
  const docs = useSelector((state) => state.docs);
  return !docs.length ? (
    <h2>loaaading </h2>
  ) : (
    <div>
      {docs.map((doc) => (
        <DocsCard doc={doc} key={doc._id} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
};

export default DocsList;
