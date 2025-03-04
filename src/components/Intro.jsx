import React from "react";
import myImg from "../assets/mee.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineWhatsApp, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import FiverrSection from "./Fiver";

const Intro = () => {
  return (
    <div className="md:py-10 pb-6 px-6 md:mx-32" id="about">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:space-x-6">
          <div className="md:w-2/3 pt-4 text-black mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              LET ME <span className="text-green-500"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed">
              I fell in love with programming and I have at least learnt
              something, since I wrote my first line of code
              <br />
              <br />I am fluent in classics like
              <span className="text-green-500 font-semibold">
                {" "}
                C++, Python, Kotlin, JavaScript, and TypeScript
              </span>
              .
              <br />
              <br />
              My field of interest includes building new
              <span className="text-green-500 font-semibold">
                {" "}
                Web Technologies and Products
              </span>
              .
              <br />
              <br />I apply my passion for developing products with
              <span className="text-green-500 font-semibold"> Node.js</span> and
              <span className="text-green-500 font-semibold">
                {" "}
                Modern Javascript Libraries and Frameworks{" "}
              </span>
              like <span className="text-green-500 font-semibold">React.js and Next.js</span>.
              I also develop{" "}
              <span className="text-green-500 font-semibold"> Mobile Applications </span>
              using <br />
              <span className="text-green-500 font-semibold">
                {" "}
                React Native, JetPack Compose (Android){" "}
              </span>
              to deliver cross-platform experiences.
            </p>
          </div>

          <div className="flex justify-center border-2 rounded-full border-green-500">
            <Tilt>
              <img src={myImg} className="w-52 md:w-64" alt="avatar" />
            </Tilt>
          </div>
        </div>

        <FiverrSection />
 
      </div>
    </div>
  );
};

export default Intro;
