import React from "react";
import people from "../../images/people.png";
import feedback from "../../images/feedback.png";
import event from "../../images/event.png";
import Summary from "./Summary";

const BusinessSummary = () => {
  return (
    <div className="text-center">
      <div className="text-center my-4">
        <h2 className="text-3xl font-bold">Millions Cusotmer Trust Us</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Summary
          cardTitle="Happy Customers"
          quantity="2.5k+"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={people}></Summary>
        <Summary
          cardTitle="Customer Feedback"
          quantity="1.5k+"
          bgClass="bg-neutral"
          img={feedback}></Summary>
        <Summary
          cardTitle="Event Completion"
          quantity="150+"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={event}></Summary>
      </div>
    </div>
  );
};

export default BusinessSummary;
