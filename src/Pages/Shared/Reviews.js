import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { DynamicStar } from "react-dynamic-star";
import "./Review.css";

const Reviews = () => {
  // hooks
  const [reviews, setReviews] = useState([]);

  // react slick settings
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // customize slick arrow
  function slickArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    const url = "http://localhost:5000/reviews";

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-center text-3xl">
        What Our Customer Say: {reviews.length}
      </h2>

      <Slider {...settings}>
        {reviews?.map((review) => (
          <div key={review._id} className="card w-96 bg-base-100 shadow-xl m-1">
            <figure>
              <img className="rounded-full" src={review.image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">{review.name}</h2>
              <p>"{review.feedback}"</p>

              <DynamicStar width={15} rating={review.ratings} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
