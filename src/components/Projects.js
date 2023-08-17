import React from "react";
import Spotify from "./images/spotify.png";
import V1 from "./images/v1.png";
import Capstone from "./images/capstone.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const projectsData = [
    {
        id: 0,
        image: Spotify,
        title: "Spotify App",
        description: "Full stack web app to visualize personalized Spotify data.",
        badge1: "Node.js",
        badge2: "REST",
    },
    {
        id: 1,
        image: V1,
        title: "Personal Website",
        description: "My v1 personal website built with React.js. Updates deployed regularly.",
        badge1: "Firebase",
        badge2: "Tailwind CSS",
    },
    {
        id: 2,
        image: Capstone,
        title: "Restaurant Homepage Template",
        description: "Restaurant homepage template. Meta Front-End Developer Capstone project.",
        badge1: "React",
        badge2: "React-Bootstrap",
    },
]

function Projects() {
    return (
        <>
        {projectsData.map(({ id, image, title, description, badge1, badge2}) => (
        <div key={id} id="projects-section"
        className="container font-gotham lg:mb-16 md:mb-12 mb-8
                    grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-2">
        <div>
            <img className="p-2 bg-groupHover w-auto mb-1 w-40 rounded"
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
        <button className="hover:translate-x-1">
            <Link to="/archive"
                className="font-gotham font-semibold text-turqoise
                hover:text-orange">
                View All Projects <FontAwesomeIcon className="ml-1"icon={faArrowRight} size="lg" />
            </Link>
        </button>
        </>
    );
  }

  export default Projects;