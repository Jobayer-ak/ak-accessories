import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://ak-accessories-server-side.vercel.app/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [parts]);

  return [parts, setParts];
};

export default useParts;
