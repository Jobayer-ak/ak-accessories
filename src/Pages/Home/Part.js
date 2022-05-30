import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  // hooks
  const navigate = useNavigate();

  const {
    _id,
    name,
    img,
    price,
    description,
    available_quantity,
    min_quantity,
  } = part;

  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="card w-full bg-base-100 my-7 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Available Quantity: {available_quantity}</p>
        <p>Minimum Order Quantity: {min_quantity}</p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => navigateToPurchase(_id)}
            className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
