import React, { useEffect, useState } from "react";

const Parts = () => {
  // hooks
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/parts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParts(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Parts: {parts.length}</h2>
      <h4 className="text-1xl">Name: {parts.name}</h4>
    </div>
  );
};

export default Parts;
