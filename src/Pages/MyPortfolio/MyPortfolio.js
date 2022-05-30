import React from "react";
import Footer from "../Shared/Footer";

const MyPortfolio = () => {
  return (
    <div className="text-center p-5">
      <h2 className="text-primary text-2xl">Name: Md. Jobayer Akanda</h2>
      <h2 className="text-primary text-xl">Email: jobayer.ak@gmail.com</h2>
      <h2 className="text-primary my-2 text-2xl">Educational Background:</h2>
      <p className="text-primary my-2">SSC: Taldighi High School</p>
      <p className="text-primary my-2">
        Diploma in Textile Engineering: Shyamoli Ideal Polytechnic Institute
      </p>
      <p className="text-primary my-2">
        My Web Development Skills <br /> HTML, CSS, Bootstrap, Tailwind,
        Javascript, ReactJS, NodeJs, expressJs, Git{" "}
      </p>
      <p className="text-primary my-2">Projects Link: </p>
      <p className="text-primary my-2">
        Link 1: https://e-warehouse-management.firebaseapp.com/{" "}
      </p>
      <p className="text-primary my-2">
        Link 2: https://verdant-mermaid-2c74f9.netlify.app/
      </p>
      <p className="text-primary my-2">
        Link 3: https://famous-cuchufli-8bc987.netlify.app/
      </p>

      <Footer></Footer>
    </div>
  );
};

export default MyPortfolio;
