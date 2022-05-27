import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import usePartDetail from "../../hooks/usePartDetail";

const Purchase = () => {
  // hooks
  const [user] = useAuthState(auth);
  const { partsId } = useParams();
  const [part] = usePartDetail(partsId);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-row justify-center items-center gap-7">
      <div>
        <img className="w-72" src={part.img} alt="" />
      </div>
      <div>
        <h2 className="text-3xl">Purchase Your Parts</h2>
        <p>Parts Name: {part.name}</p>
        <p>{part.description}</p>
        <p>Price: ${part.price}</p>
        <p>Minimum Order: {part.min_quantity}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Purchase;
