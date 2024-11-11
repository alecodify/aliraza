import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="rounded-lg pt-0 mx-auto">
      <div className="text-left">
        <blockquote className="mb-4">
          <p className="text-justify text-gray-700">
            Hi Everyone, I am{" "}
            <span className="text-green-600 font-semibold">
              Ali Raza
            </span>{" "}
            from <span className="text-green-600 font-semibold">
              Sahiwal, Pakistan.
            </span>
            <br />
            I am currently employed as a web & app developer at <a href="https://www.digisense.tech/" target="_blank" className="decoration-none text-green-600 font-semibold">Digi Sense</a>.
            <br />
            I have completed Graduation in Computer Science from  <a href="https://www.uosahiwal.edu.pk/" target="_blank" className="decoration-none text-green-600 font-semibold">University of Sahiwal</a>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li className="flex items-center space-x-2 text-gray-600">
              <ImPointRight className="text-green-600" />
              <span>Playing Games</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600">
              <ImPointRight className="text-green-600" />
              <span>Reading Tech Blogs</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600">
              <ImPointRight className="text-green-600" />
              <span>Travelling</span>
            </li>
          </ul>

          <p className="mt-6 text-green-500 font-semibold">
            "Strive to build things that make a difference!"
          </p>
          <footer className="mt-2 text-right text-gray-500">- Ali Raza</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
