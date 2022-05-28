import React from "react";
import BusinessSummary from "../Shared/BusinessSummary";
import Footer from "../Shared/Footer";
import Reviews from "../Shared/Reviews";
import SlickReview from "../Shared/SlickReview";
import Banner from "./Banner";
import Parts from "./Parts";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto p-5 md:p-2">
        <Banner></Banner>
        <Parts></Parts>
        <Reviews></Reviews>
        {/* <SlickReview></SlickReview> */}
        <BusinessSummary></BusinessSummary>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
