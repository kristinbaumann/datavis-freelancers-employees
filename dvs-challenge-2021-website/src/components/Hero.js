import * as React from "react";

const Hero = () => (
  <div className="bg-white border-b border-gray-400 shadow">
    <div className="font-sans py-6">
      <h1 className="font-bold font-sans break-normal pt-6 pb-6 text-3xl md:text-5xl text-center leading-10">
        The Data Vis Industry for <br />
        <span className="text-freelancer italic font-serif">
          Freelancers
        </span>{" "}
        and <span className="text-employee italic font-serif">Employees</span>
      </h1>
      <p className="text-l md:text-xl font-normal text-gray-600 text-center">
        Insights from the Data Visualization Society State of the Industry
        Survey 2021
      </p>
    </div>
  </div>
);

export default Hero;
