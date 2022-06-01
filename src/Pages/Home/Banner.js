import React from "react";
import Helmet from "../../images/slider/Helmet.jpg";
import bike1 from "../../images/slider/mcyle-1.jpg";
import bike2 from "../../images/slider/mcyle-2.webp";
import bike3 from "../../images/slider/mcycle-3.jpg";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={Helmet} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={bike1} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={bike2} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={bike3} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-primary btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-primary btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-primary btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-primary btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
