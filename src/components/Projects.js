import React from "react";
import Spotify from "./images/spotify.png";
import V1 from "./images/v1.png";
import NASA from "./images/NASA..png";
import Capstone from "./images/capstone.png";
import Form from "./images/form.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Resume from "../aj.resume.pdf";


const projectsData = [
    {
        id: 0,
        image: NASA,
        title: "NASA Image of the Day",
        description: "Frontend deployed on Vercel, backend deployed on Heroku.",
        badge1: "React",
        badge2: "MongoDB",
    },
    {
        id: 1,
        image: Spotify,
        title: "Spotify App",
        description: "Full stack web app to visualize personal Spotify data.",
        badge1: "Express.js",
        badge2: "Spotify Web API",
    },
    {
        id: 2,
        image: V1,
        title: "Personal Website",
        description: "My v1 personal website built with React. Updates deployed regularly.",
        badge1: "Firebase",
        badge2: "Tailwind CSS",
    },
    {
        id: 3,
        image: Capstone,
        title: "Restaurant Homepage Template",
        description: "Responsive homepage with logic to reserve a table.",
        badge1: "ChakraUI",
        badge2: "React",
    },
]

function Projects() {
    return (
        <>
        <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream
                        lg:text-xl md:text-xl text-base font-semibold">
            <h1>Projects</h1>
        </div>
        {projectsData.map(({ id, image, title, description, badge1, badge2}) => (
        <div key={id} id="projects-section"
        className="container font-gotham lg:mb-16 md:mb-12 mb-8
                    grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-2">
        <div>
            <img className="p-1 bg-bdbg w-auto mb-1 w-40 rounded"
            src={image} alt="project-screenshot"/>
        </div>
        <div>
            <p className="text-darkcream
                            lg:text-base md:text-base text-sm
                            mb-1 font-semibold justify-right">{title}</p>
            <p className="text-darkcream
                            lg:text-sm md:text-sm text-xs
                            mb-3 justify-right">{description}</p>
            <p className="inline-flex items-center justify-center rounded bg-bdbg text-orange
                            text-xs px-1 py-1 mr-1 font-semibold font-inter">{badge1}</p>
            <p className="inline-flex items-center justify-center rounded bg-bdbg text-orange
                            text-xs px-1 py-1 mr-1 font-semibold font-inter">{badge2}</p>
        </div>
        </div>
        ))}
        <div className="hover:translate-x-1 font-gotham font-semibold
                text-turqoise hover:text-orange">
        <button>
            <Link to="/archive">
                View All Projects <FontAwesomeIcon className="ml-1"icon={faArrowRight} size="lg" />
            </Link>
        </button>
        </div>
        <div className="hover:translate-x-1 font-gotham font-semibold
                text-turqoise hover:text-orange lg:mt-8 md:mt-8 mt-4">
             <a href={Resume}
            target="_blank"
            rel="noopener noreferrer">
                View Full Resume <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </a>
        </div>
        </>
    );
  }

  export default Projects;