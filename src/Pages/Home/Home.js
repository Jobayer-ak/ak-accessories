import React from "react";
import Footer from "../Shared/Footer";
import Reviews from "../Shared/Reviews";
import Banner from "./Banner";
import Brand from "./Brand/Brand";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Parts from "./Parts";
import ShowCase from "./ShowCase/ShowCase";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto p-5 md:p-2">
        <Banner></Banner>
        <Parts></Parts>
        <BusinessSummary></BusinessSummary>
        <Reviews></Reviews>
        <Brand></Brand>
        <ShowCase></ShowCase>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
