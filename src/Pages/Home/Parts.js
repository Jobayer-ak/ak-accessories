import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useParts from "../../hooks/useParts";
import Part from "./Part";

const Parts = () => {
  // hooks
  const { ID } = useParams();
  const [parts] = useParts();

  return (
    <div>
      <h2 className="text-2xl">Parts: {parts.length}</h2>
      <div className="flex flex-row flex-wrap gap-14">
        {parts.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
