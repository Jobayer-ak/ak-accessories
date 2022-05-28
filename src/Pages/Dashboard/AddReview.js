import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="text-center">
      <h2 className="text-3xl">Add A Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center my-5">
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
