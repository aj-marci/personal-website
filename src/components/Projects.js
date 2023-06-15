import React from "react";
import Personal from "./images/personal.png";
import { Link } from 'react-router-dom';


const projectsData = [
    {
        image: Personal,
        title: "Personal Website",
        description: "React.js, Tailwind CSS, Formik, Yup",
    },
    {
        image: Personal,
        title: "Meta Course Capstone",
        description: "React.js, React-Bootstrap, Formik, Yup",
    },
    {
        image: Personal,
        title: "React Registration Form",
        description: "React.js, HTML, CSS",
    },
]

function Projects() {
    return (
        <>
        {projectsData.map(({ image, title, description}) => (
        <div key={title} id="exp-section"
        className="container p-2 rounded hover:bg-groupHover
                    font-gotham lg:mb-16 md:mb-12 mb-8">
            <img className="w-auto mb-1"
            src={image} alt="project-screenshot"/>
            <p className="text-orange lg:text-base md:text-base text-sm mb-1">{title}</p>
            <p className="text-lightcream lg:text-sm md:text-sm text-xs mb-1">{description}</p>
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