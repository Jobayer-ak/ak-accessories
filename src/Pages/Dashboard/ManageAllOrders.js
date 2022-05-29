import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderedPartsDetail from "./OrderedPartsDetail";

const ManageAllOrders = () => {
  const [user] = useAuthState(auth);
  const [orderedParts, setOrderedParts] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // const myOrders = data.filter((d) => d.customerEmail === user.email);

        setOrderedParts(data);
      });
  }, [user, isReload]);
  return (
    <div className="bg-gray-200 p-5">
      <h2 className="text-3xl font-bold text-center">
        My Orders: {orderedParts.length}
      </h2>
      {orderedParts.map((ordered) => (
        <OrderedPartsDetail
          key={ordered._id}
          ordered={ordered}
          isReload={isReload}
          setIsReload={setIsReload}></OrderedPartsDetail>
      ))}
    </div>
  );
};

export default ManageAllOrders;
