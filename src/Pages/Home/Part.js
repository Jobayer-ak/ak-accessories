import React from "react";
import { Link, useParams } from "react-router-dom";

const Part = ({ part }) => {
  // hooks
  const { ID } = useParams();
  console.log(ID);
  const {
    _id,
    name,
    img,
    price,
    description,
    available_quantity,
    min_quantity,
  } = part;

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
        <p>Price: ${price}</p>
        <p>Parts ID: {ID}</p>
        <div className="card-actions">
          <Link to={`/parts/${ID}`}>
            <button className="btn btn-primary">Proceed Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
