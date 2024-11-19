import React from "react";
import Spotify from "./images/spotify.png";
import Unlayer from "./images/embedded.editor.png"
import GPT from "./images/GPT.png";
import NASA from "./images/NASA..png";
import Capstone from "./images/capstone.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const projectsData = [
    {
        id: 0,
        image: GPT,
        title: "Personal GPT",
        description: "Full-stack personal AI chat assistant.",
        badge1: "TypeScript",
        badge2: "OpenAI API",
        badge3: "Node.js"
    },
    {
        id: 1,
        image: NASA,
        title: "NASA APOD API",
        description: "Full-stack web app displaying a new astronomy image and info daily.",
        badge1: "Vercel",
        badge2: "TailwindCSS",
        badge3: "Heroku"
    },
    {
        id: 2,
        image: Spotify,
        title: "Spotify Web API",
        description: "Full-stack web app visualizing my personal Spotify data in a similar UI.",
        badge1: "Express",
        badge2: "Node.js",
        badge3: "Heroku"
    },
    /*{
        id: 2,
        image: V1,
        title: "Personal Website",
        description: "My personal website built with React. Updates deployed regularly.",
        badge1: "Firebase",
        badge2: "Tailwind CSS",
    },*/
    /*{
        id: 3,
        image: Capstone,
        title: "Restaurant Homepage Template",
        description: "Responsive homepage with logic to reserve a table.",
        badge1: "ChakraUI",
        badge2: "React",
    },*/
    {
        id: 3,
        image: Unlayer,
        title: "Emedded Unlayer Editor",
        description: "Full-stack web app for designing, managing, and sending emails.",
        badge1: "MongoDB",
        badge2: "SendGrid API",
        badge3: "React"
    },
]

function Projects() {
    return (
        <>
<div className="font-extrabold drop-shadow-lg">
        <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-charcoal
                        lg:text-xl md:text-xl text-base"
                        id="projects-section">
            <h1>Projects</h1>
        </div>
        {projectsData.map(({ id, image, title, description, badge1, badge2, badge3}) => (
        <div key={id}
        className="font-gotham lg:mb-8 md:mb-8 mb-4
                    grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-2">
        <div>
            <img className="w-auto mb-1 w-40 rounded"
            src={image} alt="project-screenshot"/>
        </div>
        <div>
            <p className="text-charcoal
                            lg:text-base md:text-base text-sm
                            mb-1 justify-right">{title}</p>
            <p className="text-charcoal
                            lg:text-sm md:text-sm text-xs
                            mb-3 justify-right">{description}</p>
            <p className="invisible md:visible lg:visible inline-flex rounded bg-darkGreen text-lime
                            text-xs px-1 lg:px-2 md:px-2 py-1 mr-1 font-semibold font-inter">{badge1}</p>
            <p className="invisible md:visible lg:visible inline-flex rounded bg-darkGreen text-lime
                            text-xs px-1 lg:px-2 md:px-2 py-1 mr-1 font-semibold font-inter">{badge2}</p>
            <p className="invisible md:visible lg:visible inline-flex rounded bg-darkGreen text-lime
                            text-xs px-1 lg:px-2 md:px-2 py-1 mr-1 font-semibold font-inter">{badge3}</p>
        </div>
        </div>
        ))}
        <div className="hover:translate-x-1 font-gotham font-semibold
                text-charcoal hover:text-lightGreen text-base lg:text-lg md:text-lg">
        <button>
            <Link to="/archive">
                View All Projects <FontAwesomeIcon className="ml-1"icon={faArrowRight} size="lg" />
            </Link>
        </button>
        </div>
</div>
        </>
    );
  }

  export default Projects;