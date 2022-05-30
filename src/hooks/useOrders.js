import React, { useEffect, useState } from "react";

const useOrders = () => {
  // hook
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://thawing-reef-56489.herokuapp.com/orders`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return [orders, setOrders];
};

export default useOrders;
