import React from "react";
import BusinessSummary from "../Shared/BusinessSummary";
import Footer from "../Shared/Footer";
import Reviews from "../Shared/Reviews";
import Banner from "./Banner";
import Parts from "./Parts";

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
