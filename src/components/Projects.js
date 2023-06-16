import React from "react";
import NHL from "./images/nhl.png";
import { Link } from 'react-router-dom';


const projectsData = [
    {
        image: NHL,
        title: "Personal Website",
        description: "React.js, Tailwind CSS, Formik, Yup",
    },
    {
        image: NHL,
        title: "Meta Course Capstone",
        description: "React.js, React-Bootstrap, Formik, Yup",
    },
    {
        image: NHL,
        title: "React Registration Form",
        description: "React.js, HTML, CSS",
    },
]

function Projects() {
    return (
        <>
        {projectsData.map(({ image, title, description}) => (
        <div key={title} id="projects-section"
        className="container p-2 rounded hover:bg-groupHover
                    font-gotham lg:mb-16 md:mb-12 mb-8 grid grid-cols-2">
        <div>
            <img className="w-auto mb-1 w-40"
            src={image} alt="project-screenshot"/>
        </div>
        <div>
            <p className="text-darkcream
                            lg:text-base md:text-base text-sm
                            mb-1 font-semibold justify-right">{title}</p>
            <p className="text-lightcream lg:text-sm md:text-sm text-xs mb-1">{description}</p>
        </div>
        </div>
        ))}
        <button>
            <Link to="/archive"
                className="lg:mb-24 md:mb-20 mb-8 font-gotham font-semibold text-turqoise
                hover:text-orange">
                View All Projects
            </Link>
        </button>
        </>
    );
  }

  export default Projects;