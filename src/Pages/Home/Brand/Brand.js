import React from "react";
import yamaha from "../../../images/Brand/yamaha.png";
import honda from "../../../images/Brand/honda.png";
import tvs from "../../../images/Brand/tvs.png";
import suzuki from "../../../images/Brand/suzuki.png";
import bajaj from "../../../images/Brand/bajajt.png";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="text-center mb-7 pt-5 pb-10 ">
      <h2 className="text-primary text-4xl font-bold my-8">Brand</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 brand-container ">
        <div className="brand">
          <img src={yamaha} alt="" />
        </div>
        <div className="brand">
          <img src={suzuki} alt="" />
        </div>
        <div className="brand">
          <img src={honda} alt="" />
        </div>
        <div className="brand">
          <img src={tvs} alt="" />
        </div>
        <div className="brand">
          <img src={bajaj} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
