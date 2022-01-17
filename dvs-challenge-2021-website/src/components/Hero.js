import * as React from "react";

const Hero = () => (
  <div className="bg-white border-b border-gray-400 shadow">
    <div className="font-sans py-6">
      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-6 text-3xl md:text-5xl text-center leading-10">
        The Data Vis Industry for <br />
        <span className="text-freelancer italic font-serif">
          Freelancers
        </span>{" "}
        and <span className="text-employee italic font-serif">Employees</span>
      </h1>
      <p className="text-l md:text-xl font-normal text-gray-600 text-center">
        A comparison of Target Audiences, Communication Channels and Tools
      </p>
    </div>
  </div>
);

export default Hero;
