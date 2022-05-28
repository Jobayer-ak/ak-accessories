import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { toast } from "react-toastify";

const OrderedPartsDetail = ({ ordered }) => {
  const {
    _id,
    customerName,
    partName,
    phone,
    partImg,
    partPrice,
    partQuantity,
    partDesc,
  } = ordered;

  //   useEffect(() => {
  //     setIsReload(false);
  //   }, [isReload]);

  // handle delete order
  const handleDeleteOrder = () => {
    const url = `http://localhost:5000/orders/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(true);
        toast.success("Deleted Item!");
        // window.location.reload(true);
      });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl p-4 my-3">
      <img className="w-2/6" src={partImg} alt="Album" />
      <div className="card-body">
        <h3 className="text-2xl font-bold">{partName}</h3>
        <p className="font-bold">{partDesc}</p>
        <p className="text-xl font-bold">Price: ${partPrice}</p>
        <p className="font-bold text-xl">Ordered Quantity: {partQuantity}</p>
      </div>
      <div className="card-actions justify-center items-center">
        <label htmlFor="my-modal-6" className="btn modal-button">
          Delete
        </label>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are Your Sure You Want To Cancel Your Order?
            </h3>

            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Cancel
              </label>
              <label
                onClick={handleDeleteOrder}
                htmlFor="my-modal-6"
                className="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedPartsDetail;
