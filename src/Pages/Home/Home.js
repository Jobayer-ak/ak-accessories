import React from "react";
import BusinessSummary from "../Shared/BusinessSummary";
import Footer from "../Shared/Footer";
import Parts from "../Shared/Parts";
import Reviews from "../Shared/Reviews";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Reviews></Reviews>
      <BusinessSummary></BusinessSummary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
