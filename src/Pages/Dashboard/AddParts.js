import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddParts = () => {
  // hook
  const [user] = useAuthState(auth);

  // Add Item
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/parts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Your Item is Added!!!");
        reset();
      });
  };

  return (
    <div className="container mt-3 mb-5 text-center">
      <h2 className="text-2xl my-5">Add Inventory Item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col w-2/4 add-item">
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Parts Name"
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <textarea
          className="mb-4 p-2 rounded-md"
          placeholder="Parts Description"
          rows={5}
          {...register("description", { require: true, maxLength: 50 })}
        />

        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Minimum Quantity"
          type="number"
          {...register("min_quantity")}
        />
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Available Quantity"
          type="text"
          {...register("available_quantity")}
        />
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Parts Image URL"
          type="text"
          {...register("img")}
        />

        <input
          className="btn btn-secondary mt-3 mb-5"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddParts;
