import * as React from "react";

const Hero = () => (
  <div className="bg-white border-b border-gray-400 shadow font-sans py-16 px-2">
    <h1 className="font-bold font-sans break-normal pb-6 text-[2rem] md:text-[3.5rem] text-center leading-snug">
      <span className="text-freelancer italic font-serif">Freelancers</span> and{" "}
      <span className="text-employee italic font-serif">Employees</span>{" "}
      <br className="hidden md:block" />
      in the Data Visualization Industry
    </h1>
    <div className="container w-full md:max-w-3xl mx-auto px-4 md:px-6">
      <p className="text-l md:text-xl font-normal text-gray-600 text-center">
        Insights from the Annual Data Visualization State of the Industry Survey
        2021 <br className="hidden md:block" /> by Kristin Baumann
      </p>
    </div>
  </div>
);

export default Hero;
