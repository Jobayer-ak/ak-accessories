import React from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import usePartDetail from "../../hooks/usePartDetail";

const PartsDetail = () => {
  const { ID } = useParams();
  const [part] = usePartDetail(ID);
  console.log(part);
  return (
    <div>
      <h2 className="text-3xl">Parts Details:</h2>
      <p>Parts Name: {part.name}</p>
    </div>
  );
};

export default PartsDetail;
