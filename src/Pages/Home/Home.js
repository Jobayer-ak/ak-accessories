import React from "react";
import Footer from "../Shared/Footer";
import Reviews from "../Shared/Reviews";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import OurParters from "./OurParters";
import Parts from "./Parts";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto p-5 md:p-2">
        <Banner></Banner>
        <Parts></Parts>
        <Reviews></Reviews>
        <BusinessSummary></BusinessSummary>
        <OurParters></OurParters>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
