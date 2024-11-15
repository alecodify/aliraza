import React from 'react';
import myImg from "../assets/mee.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            I fell in love with programming and I have at least learned
            something, I think… 🤷‍♂️
            <br /><br />
            I am fluent in classics like
            <span className="text-green-500"> C++, Javascript and Mysql</span>.
            <br /><br />
            My field of interest includes building new
            <span className="text-green-500"> Web Technologies and Products</span>.
            <br /><br />
            I apply my passion for developing products with
            <span className="text-green-500"> Node.js</span> and 
            <span className="text-green-500"> Modern Javascript Libraries and Frameworks </span> 
            like <span className="text-green-500">React.js and Next.js</span>.
            I also develop <span className='text-green-500'> Mobile Applications </span>  
            using <br/>
            <span className='text-green-500'> React Native with Expo </span>  
            to deliver cross-platform experiences.
          </p>
        </div>

        <div className="flex justify-center border-2 rounded-full border-green-500">
          <Tilt>
            <img src={myImg} className="w-52 md:w-64" alt="avatar" />
          </Tilt>
        </div>
      </div>

      <div className="text-center mt-6 text-black">
        <h2 className="text-3xl font-semibold mb-4">FIND ME ON</h2>
        <p className="text-lg mb-6">
          Feel free to <span className="text-green-500">connect</span> with me
        </p>
        <div className="flex justify-center font-bold md:space-x-4">
         <a
            href="https://wa.me/923206914610"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-white p-2 rounded-full hover:bg-green-500 text-3xl"
          >
            <AiOutlineWhatsApp />
          </a>  
          <a
            href="https://github.com/alecodify"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-white p-2 rounded-full hover:bg-green-500 text-3xl"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/alecodify"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-white p-2 rounded-full hover:bg-green-500 text-3xl"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/imaleraza/"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-white p-2 rounded-full hover:bg-green-500 text-3xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/al0raza"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-white p-2 rounded-full hover:bg-green-500 text-3xl"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Intro