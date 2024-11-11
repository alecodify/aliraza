import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="md:mx-36 py-6">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
        <div className="text-md md:text-md font-semibold">
          Design and Developed by Ali Raza
        </div>

        <div className="text-md md:text-md font-semibold">
          &copy; 2024. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/imaleraza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/alecodify"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://github.com/alecodify"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/0lyraza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
