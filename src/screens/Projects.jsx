import React from "react";
import { ProjectCard } from "../components";
import Project1 from "../assets/projects/1.png";
import Project2 from "../assets/projects/2.png";
import Project3 from "../assets/projects/3.png";


function Projects() {
  return (
    <div className="project-section">
      <div className="max-w-screen-lg mx-auto mt-16 md:mt-20 px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          My Recent <strong className="text-green-500">Works</strong>
        </h1>
        <p className="text-black text-center mb-8">
          Here are a few projects I've worked on recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <ProjectCard
              imgPath={Project3}
              title="Survey"
              description="This website survey builder with multiple question types, real-time responses, and analytics using Vue with vite."
              ghLink="https://github.com/alecodify/vue-survey"
              demoLink="https://vue-survey-client.vercel.app/"
              readmeLink=""
            />

            <ProjectCard
              imgPath={Project1}
              title="Html-Css-JavaScript"
              description="100 mini web projects using HTML, CSS and JavaScript."
              ghLink="https://github.com/alecodify/html-css-javascript-projects"
              demoLink=""
              readmeLink="https://github.com/alecodify/html-css-javascript-projects/blob/main/readme.md"
            />

            <ProjectCard
              imgPath={Project2}
              title="React Projects"
              description="40 mini web projects using React with vite."
              ghLink="https://github.com/alecodify/react-projects"
              demoLink=""
              readmeLink="https://github.com/alecodify/react-projects/blob/main/readme.md"
            />

            

        </div>
      </div>
    </div>
  );
}

export default Projects;
