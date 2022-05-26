import React from "react";

const Part = ({ part }) => {
  const { name, img, price, description, available_quantity, min_quantity } =
    part;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Available Quantity: {available_quantity}</p>
        <p>Minimum Order Quantity: {min_quantity}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
