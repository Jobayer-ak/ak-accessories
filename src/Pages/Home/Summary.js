import React from "react";

const Summary = ({ img, cardTitle, bgClass, quantity }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pl-5 pt-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p className="text-4xl">{quantity}</p>
      </div>
    </div>
  );
};

export default Summary;
