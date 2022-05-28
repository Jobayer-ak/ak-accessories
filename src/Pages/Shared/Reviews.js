import React, { useEffect, useState } from "react";
import ShowReviews from "./ShowReviews";
import SlickReview from "./SlickReview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const Reviews = () => {
  // hooks
  const [reviews, setReviews] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const url = "http://localhost:5000/reviews";

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <div>
      <h2 className="text-center text-3xl">
        What Our Customer Say: {reviews.length}
      </h2>
      {/* <div>
        {reviews?.map((review) => (
          <ShowReviews key={review._id} review={review}></ShowReviews>
        ))}
      </div> */}
      <Slider {...settings}>
        <div>
          <div>
            {reviews?.map((review) => (
              <ShowReviews key={review._id} review={review}></ShowReviews>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
