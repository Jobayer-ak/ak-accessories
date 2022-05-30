import { useEffect, useState } from "react";

const usePartDetail = (partsId) => {
  // hook
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `https://thawing-reef-56489.herokuapp.com/parts/${partsId}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partsId]);

  return [part, setPart];
};

export default usePartDetail;
