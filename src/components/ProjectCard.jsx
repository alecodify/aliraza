import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLaptopFill } from "react-icons/bs";

function ProjectCards({ imgPath, ghLink, title, description, demoLink, readmeLink }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-green-500 hover:shadow-green-600">
      <img
        src={imgPath}
        alt="project-img"
        className="w-full px-2 h-64 object-cover transition-all duration-300 hover:opacity-80"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 uppercase">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full"
          >
            <BsGithub className="mr-2" />
            Github
          </a>

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-full"
            >
              <BsLaptopFill className="mr-2" />
              Live
            </a>
          )}

        {readmeLink && (
            <a
              href={readmeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-full"
            >
              <CgWebsite className="mr-2" />
              Readme
            </a>
        )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
