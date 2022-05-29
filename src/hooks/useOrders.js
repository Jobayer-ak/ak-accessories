import React, { useEffect, useState } from "react";

const useOrders = () => {
  // hook
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return [orders, setOrders];
};

export default useOrders;
