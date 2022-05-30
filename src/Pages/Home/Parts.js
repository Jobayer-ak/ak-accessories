import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useParts from "../../hooks/useParts";
import Part from "./Part";

const Parts = () => {
  // hooks
  const [parts] = useParts();
  const location = useLocation();

  // current path name
  const pathName = location.pathname;

  return (
    <div className="mb-20">
      <h2 className="text-2xl">Parts: {parts.length}</h2>
      <div className="flex flex-row flex-wrap gap-14">
        {pathName == "/"
          ? parts
              .slice(0, 6)
              .map((part) => <Part key={part._id} part={part}></Part>)
          : parts.map((part) => <Part key={part._id} part={part}></Part>)}
      </div>
    </div>
  );
};

export default Parts;
