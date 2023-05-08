import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data.rating);

    if (data.rating < 1 && data.rating > 5) {
      alert("Your review should be within 1 to 5!");
    }

    const review = {
      image: user?.photoURL,
      name: user?.displayName,
      feedback: data.review,
      ratings: data.rating,
    };

    const url = "https://ak-accessories-server-side.vercel.app/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log("Reviews: ", inserted);
        if (inserted.insertedId) {
          toast.success("Review Added Successfully!");
          reset();
        } else {
          toast.error("Failed To Add The Review!");
        }
      });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl">Add A Review</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-5 my-5">
        <textarea
          className="w-2/4 p-3"
          placeholder="Write your review"
          rows="4"
          cols="50"
          {...register("review", { required: true, maxLength: 20 })}
        />

        {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
        <input
          className="w-1/4 p-3"
          type="number"
          placeholder="Give Us Ratings"
          {...register("rating", { min: 1, max: 5 })}
        />
        <p>Your Rating should be within 1 to 5!</p>
        <input className=" w-1/4 btn bnt-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
