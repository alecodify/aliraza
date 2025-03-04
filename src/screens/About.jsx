import React from "react";
import laptopImg from "../assets/about.png";
import { AboutCard, GitHub, Techstack, Toolstack } from "../components";

function About() {
  return (
    <div className="about-section pt-8 md:pt-24 md:mx-32">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mb-24">
          <div className="w-full md:w-7/12 ">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Know Who <span className="text-green-500">I'M</span>
            </h1>
            <AboutCard />
          </div>

          <div className="w-full md:w-5/12 p-4 mt-8 md:mt-0">
            <img
              src={laptopImg}
              alt="about"
              className="w-full h-auto"
            />
          </div>
        </div>

        <h1 className="text-2xl text-center font-semibold md:mt-18 mb-6">
          Professional <span className="text-green-500">Skillset</span>
        </h1>
        <Techstack />

        <h1 className="text-2xl text-center font-semibold mt-12 mb-6">
          Tools <span className="text-green-500">I use</span>
        </h1>
        <Toolstack />

        {/* <GitHub /> */}
      </div>
    </div>
  );
}

export default About;
