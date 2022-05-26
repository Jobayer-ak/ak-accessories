import { useEffect, useState } from "react";

const usePartDetail = (ID) => {
  // hook
  const [part, setPart] = useState({});
  console.log(ID);

  useEffect(() => {
    const url = `http://localhost:5000/parts/${ID}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [ID]);

  return [part, setPart];
};

export default usePartDetail;
