import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import { DynamicStar } from "react-dynamic-star";
// import StarRating from "react-star-rating";

const ShowReviews = ({ review }) => {
  //hooks
  const [user] = useAuthState(auth);

  const { feedback, ratings } = review;

  return (
    <div>
      <div>
        <img src={user.photoURL} alt="" />
      </div>
      <p>{feedback}</p>

      <div>
        <DynamicStar width={15} rating={ratings} />
      </div>
    </div>
  );
};

export default ShowReviews;
