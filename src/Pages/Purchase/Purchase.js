import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import usePartDetail from "../../hooks/usePartDetail";

const Purchase = () => {
  // hooks
  const [user] = useAuthState(auth);
  const { partsId } = useParams();
  const [part] = usePartDetail(partsId);

  return (
    <div>
      <h2 className="text-3xl">Purchase Your Parts</h2>
      <p>Parts Name: {part.name}</p>
    </div>
  );
};

export default Purchase;
