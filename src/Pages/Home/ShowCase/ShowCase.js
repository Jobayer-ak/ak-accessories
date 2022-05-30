import React from "react";
import parts from "../../../images/combined-parts.png";
import "./showcase.css";

const ShowCase = () => {
  return (
    <div className="container max-auto text-center py-10 showcase flex flex-col-reverse md:flex-row lg:flex-row">
      <div>
        <div className="p-5">
          <h2 className="text-4xl text-primary font-bold my-4">
            Over 50k+ genuine NEW spare parts
          </h2>
          <h3 className="text-3xl text-primary my-4">
            Delivered All Bangladesh
          </h3>
        </div>

        <div className="text-left">
          <ul className="px-12">
            <li className="list-disc">Largest genuine spare parts provider</li>
            <li className="list-disc">Trading for over 50 years</li>
            <li className="list-disc">
              Fast, safe delivery all Bangladesh using only reliable,
              trustworthy couriers
            </li>
            <li className="list-disc">
              Order your parts VAT Free Outside Dhaka City
            </li>
            <li className="list-disc">
              Unique Micro Fiche online parts ordering system
            </li>
          </ul>
        </div>
      </div>

      <div className="p-7">
        <img src={parts} alt="" />
      </div>
    </div>
  );
};

export default ShowCase;
