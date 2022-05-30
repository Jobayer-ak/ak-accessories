import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useParts from "../../hooks/useParts";
import Footer from "../Shared/Footer";
import Part from "./Part";

const Parts = () => {
  // hooks
  const [parts] = useParts();
  const location = useLocation();

  // current path name
  const pathName = location.pathname;

  return (
    <div className="">
      <h2 className="text-4xl text-center text-primary font-bold my-7">
        Motor Cycle Parts
      </h2>
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 gap-7">
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
