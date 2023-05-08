import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  // hooks
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const info = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      education: data.education,
      location: data.location,
      socialLink: data.socialLink,
      phone: data.phone,
    };

    console.log(info);
    const url = "https://ak-accessories-server-side.vercel.app/myProfile";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log("Information: ", inserted);
        if (inserted.insertedId) {
          toast.success("Your information Saved Successfully!");
          reset();
        } else {
          toast.error("Failed To Save!");
        }
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const info = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      education: e.target.education.value,
      location: e.target.location.value,
      socialLink: e.target.socialLink.value,
      phone: e.target.phone.value,
    };

    const url = `https://ak-accessories-server-side.vercel.app/updateProfile/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log("Information: ", inserted);
        if (inserted.modifiedCount) {
          toast.success("Your information Saved Successfully!");
          e.target.reset();
        } else {
          toast.error("Failed To Save!");
        }
      });
  };
  return (
    <div className="text-center">
      <h2 className="text-3xl my-3">My Profile</h2>
      <h2 className="text-2xl my-2">Name: {user?.displayName} </h2>
      <p className="text-xl">Email: {user?.email}</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col w-2/4 gap-2 my-3">
        <textarea
          className="mb-4 p-2 rounded-md"
          placeholder="Education qualification, institution names where you studied or studying"
          rows={4}
          required
          {...register("education", { require: true, maxLength: 50 })}
        />
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Location/Address"
          type="text"
          required
          {...register("locaiton")}
        />
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Social Media Profile Link"
          type="text"
          required
          {...register("socialLink")}
        />
        <input
          className="mb-4 p-2 rounded-md"
          placeholder="Phone Number"
          type="text"
          required
          {...register("phone")}
        />

        <input type="submit" className="btn btn-primary" />
      </form>

      {/* <!-- The button to open modal --> */}
      <label htmlFor="my-modal-6" className="btn btn-primary modal-button">
        Update Your Profile
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={handleUpdate}
            className="mx-auto flex flex-col w-2/4 gap-2 my-3">
            <textarea
              className="mb-4 p-2 rounded-md bg-green-200"
              placeholder="Education qualification, institution names where you studied or studying"
              required
              rows={5}
              name="education"
            />
            <input
              className="mb-4 p-2 rounded-md bg-green-200"
              placeholder="Location/Address"
              type="text"
              required
              name="location"
            />
            <input
              className="mb-4 p-2 rounded-md bg-green-200"
              placeholder="Social Media Profile Link"
              type="text"
              required
              name="socialLink"
            />
            <input
              className="mb-4 p-2 rounded-md bg-green-200"
              placeholder="Phone Number"
              type="text"
              required
              name="phone"
            />
            <button className="btn btn-primary">Save</button>
            <div className="modal-action">
              {/* <label htmlFor="my-modal-6" className="btn btn-primary">
                Cancel
              </label> */}
              <label htmlFor="my-modal-6" className="btn btn-primary">
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
