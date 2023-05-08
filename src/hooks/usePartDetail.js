import { useEffect, useState } from "react";

const usePartDetail = (partsId) => {
  // hook
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `https://localhost:8000/parts/${partsId}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partsId]);

  return [part, setPart];
};

export default usePartDetail;
