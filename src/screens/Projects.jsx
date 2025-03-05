import React from "react";
import { MobileAppCard, ProjectCard } from "../components";
import Project1 from "../assets/projects/1.png";
import Project2 from "../assets/projects/2.png";
import Project3 from "../assets/projects/3.png";
import Project4 from "../assets/projects/4.png";
import Mobile1 from "../assets/projects/m1.png"


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
              imgPath={Project4}
              title="Jobs Portal"
              description="This project allow you to easily perform CRUD operations like create, read, update, and delete jobs using Vue with Vite."
              ghLink="https://github.com/alecodify/job-portal"
              demoLink="https://job-portal-client-gamma.vercel.app/"
              readmeLink=""
            />

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
              description="A collection of 100 mini web projects built with HTML, CSS, and JavaScript, perfect for enhancing frontend development skills."
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

        <h1 className="text-3xl my-4 font-semibold mb-6 text-center">
          Mobile Apps <strong className="text-green-500">Works</strong>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MobileAppCard
            imgPath={Mobile1}
            title="Recipes App"
            description="This app allows you to search for recipes, view detailed information about each recipe."
            apkLink="app/recipes.apk"
          />
        </div>


      </div>
    </div>
  );
}

export default Projects;
