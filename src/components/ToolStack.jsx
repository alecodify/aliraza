import React from "react";
import { SiVisualstudiocode, SiPostman, SiVercel, SiAndroid, SiExpo, SiXcode, } from "react-icons/si";

function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center pb-12 space-x-4">
      <div className="tech-icons px-6 py-4 md:px-16">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icons px-6 py-4 md:px-16">
        <SiPostman />
      </div>
      <div className="tech-icons px-6 py-4 md:px-16">
        <SiVercel />
      </div>
      <div className="tech-icons px-6 py-4 md:px-16">
        <SiAndroid />
      </div>
      <div className="tech-icons px-6 py-4 md:px-16">
        <SiExpo />
      </div>
    </div>
  );
}

export default Toolstack;
