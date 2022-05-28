import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import usePartDetail from "../../hooks/usePartDetail";

const Purchase = () => {
  // hooks
  const [user] = useAuthState(auth);
  const { partsId } = useParams();
  const [part] = usePartDetail(partsId);
  const [partName, setPartName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [partPrice, setPartPrice] = useState("");
  const [partDesc, setPartDesc] = useState("");
  const [partImg, setPartImg] = useState("");
  const [partQuantity, setPartQuantity] = useState(1);
  const [status, setStatus] = useState(false);
  const [fieldError, setFieldError] = useState("");

  const orders = {
    partId: part._id,
    partName: part.name,
    partDesc: part.description,
    partImg: part.img,
    partQuantity: partQuantity,
    partPrice: part.price,
    customerEmail: user?.email,
    customerName: user?.displayName,
    address: address,
    phone: phone,
  };

  useEffect(() => {
    if (partQuantity < 1 || partQuantity > parseInt(part.available_quantity)) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [partQuantity]);

  // handle order button
  const handleOrder = () => {
    if (address === "" || phone === "" || partQuantity === "") {
      setFieldError("You must fill up all the input field!");
    } else {
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            toast.success("Your Parts is ordered!");
            // window.location.reload(true);
            // refetch();
          } else {
            toast.error("You already ordered this parts!");
          }
        });
    }
  };

  return (
    <div className="container mx-auto p-7">
      <div className="text-center mt-4">
        <h2 className="text-3xl font-bold">Purchase</h2>
      </div>
      <div className="flex md:flex-row flex-col justify-around items-center mt-20">
        <div className="text-center bg-slate-200 rounded-md shadow-2xl p-4">
          <div>
            <img className="w-72 mx-auto bg-slate-200" src={part.img} alt="" />
          </div>
          <div className="mt-4">
            <h2 className="text-2xl mb-1">Parts Name: {part.name}</h2>
            <p className="font-bold">{part.description}</p>
            <h4 className="text-xl font-bold">Price: ${part.price}</h4>
            <p className="font-bold">
              Available Quantity: {part.available_quantity}
            </p>
            <p className="font-bold">Minimum Order: {part.min_quantity}</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Order Information</h3>
          <input
            type="text"
            name="name"
            value={user?.displayName}
            readOnly
            className="input input-bordered input-primary w-full max-w-sm mb-4"
          />
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="input input-bordered input-primary w-full max-w-sm mb-4"
          />
          <input
            onBlur={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Your Address"
            name="address"
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            required
          />
          <br />
          <input
            onBlur={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone Number"
            name="phone"
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            required
          />
          <input
            onChange={(e) => setPartQuantity(e.target.value)}
            type="number"
            placeholder="Parts Quantity"
            name="quantity"
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            required
          />
          <p className="text-danger mb-2">{fieldError}</p>
          <button onClick={handleOrder} className="btn mb-4" disabled={status}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
