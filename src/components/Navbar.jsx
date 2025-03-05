import React, { useState } from 'react';
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineWhatsApp } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between md:h-24 items-center px-4 md:px-16 lg:px-36 py-6 md:py-8 fixed top-0 bg-white w-full z-50">
        <div className="flex items-center text-lg font-bold">
          <a href="/" className=' decoration-none'>
            <span className="text-green-500">{"< "}</span>
            <span className="font-semibold text-xl logo-name px-2">Ali Raza</span>
            <span className="text-green-500">{" />"}</span>
          </a>
        </div>

        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-black text-md font-semibold">
            <li>
              <Link to="/" className="hover:text-green-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500">About</Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-green-500">Projects</Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-green-500">Resume</Link>
            </li>
            <li>
              <a 
                href="https://wa.me/923206914610" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center hover:text-green-500"
              >
                <AiOutlineWhatsApp className="mr-1 text-md text-green-500" />
                WhatsApp
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/alecodify" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
              >
                <CgGitFork className="mr-1 text-lg" />
                <AiFillStar className="text-base" />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-500 focus:outline-none">
            {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-4 text-black font-semibold">
          <Link to="/" onClick={toggleMenu} className="hover:text-green-500 text-xl">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-green-500 text-xl">About</Link>
          <Link to="/project" onClick={toggleMenu} className="hover:text-green-500 text-xl">Projects</Link>
          <Link to="/resume" onClick={toggleMenu} className="hover:text-green-500 text-xl">Resume</Link>
          <a 
            href="https://wa.me/923206914610" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center hover:text-green-500 text-xl"
            onClick={toggleMenu}
          >
            <AiOutlineWhatsApp className="mr-2 text-green-500" />
            WhatsApp
          </a>
          <a 
            href="https://github.com/alecodify" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={toggleMenu}
          >
            <CgGitFork className="mr-2 text-lg" />
            <AiFillStar className="text-base" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
