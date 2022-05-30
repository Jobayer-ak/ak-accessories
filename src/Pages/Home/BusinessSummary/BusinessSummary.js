import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <div className="text-center bg_container my-5">
      <div className="text-center mt-5 mb-20">
        <h2 className="text-4xl font-bold text-teal-700">
          Thousands Cusotmer Trust Us
        </h2>
        <p className="text-primary text-2xl mt-2">
          Try To Understand Users Expectation
        </p>
      </div>

      {/* icons */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-center pt-10 icon_container">
        <div>
          <FontAwesomeIcon
            size="6x"
            icon={faSackDollar}
            style={{
              color: "rgb(15 118 110)",
            }}
            className="mb-2 lg:mb-5"
          />
          <p className="text-4xl font-bold text-teal-700">2M+</p>
          <p className="font-bold text-teal-700">Annual Revenue</p>
        </div>
        <div>
          <FontAwesomeIcon
            size="6x"
            icon={faUsersLine}
            style={{
              color: "rgb(15 118 110)",
            }}
            className="mb-2 lg:mb-5"
          />
          <p className="text-4xl font-bold text-teal-700">100k+</p>
          <p className="font-bold text-teal-700">Customers</p>
        </div>
        <div>
          <FontAwesomeIcon
            size="6x"
            icon={faComments}
            style={{
              color: "rgb(15 118 110)",
            }}
            className="mb-2 lg:mb-5"
          />
          <p className="text-4xl font-bold text-teal-700">40k+</p>
          <p className="font-bold text-teal-700">Reviews</p>
        </div>
        <div>
          <FontAwesomeIcon
            size="6x"
            icon={faScrewdriverWrench}
            style={{
              color: "rgb(15 118 110)",
            }}
            className="mb-2 lg:mb-5"
          />
          <p className="text-4xl font-bold text-teal-700">100+</p>
          <p className="font-bold text-teal-700">Tools</p>
        </div>
      </div>

      <div className="lg:px-20">
        <div class="flex flex-col md:flex-row lg:felx-row justify-between items-center p-5 lg:p-10 rounded-lg w-full bg-base-100 shadow-xl mt-20">
          <div className="text-left">
            <h2 class="text-2xl font-bold text-secondary">
              Have any question about us or get a parts request?
            </h2>

            <p className="text-left text-secondary font-bold">
              Don't hesitate to contact us
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 p-4">
            <button class="btn btn-md">Request For Quote</button>
            <button class="btn btn-md btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
