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
    const url = "https://ak-accessories-server-side.vercel.app/reviews";

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div className="container mx-auto my-5 p-7 review-container">
      <h2 className="text-center text-primary font-bold text-4xl pb-10">
        What Our Customers Say
      </h2>

      <Slider {...settings}>
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="flex flex-col lg:flex-row rounded-md bg-base-100 shadow-xl p-3 w-full gap-4">
            <img
              className="rounded-full items-center"
              src={review.image}
              alt="image"
            />

            <div className="flex flex-col mt-4 p-0">
              <p className="italic mb-2">"{review.feedback}"</p>

              <DynamicStar height={20} width={15} rating={review.ratings} />

              <h2 className="italic text-right">{review.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
