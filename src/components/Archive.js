import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const archiveData = [
    {
        date: "May, 2023",
        name: "Capstone",
        description: "meta capstone",
    },
    {
        date: "April, 2023",
        name: "React Registration Form",
        description: "React form with client side validaiton using state.",
    },
    {
        date: "June. 2023",
        name: "Personal website",
        description: "React website built with React.js and Tailwind CSS.",
    },
]

function Archive() {
    return (
        <>
        <div className="bg-background">
        <button className="bg-background text-turqoise mb-8 mt-4 ml-1 hover:text-orange">
        <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
        </Link>
        </button>
        </div>
        <div className="bg-background h-screen">
        <div>
        {archiveData.map(({ date, name, description}) => (
        <div key={name} className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-4
        font-gotham hover:bg-groupHover lg:mb-8 md:mb-8 mb-4">
        <div className="text-darkcream lg:col-span-1 lg:text-sm md:text-xs text-xs">
            <p>{date}</p>
        </div>
        <div className="text-lightcream lg:col-span-1 lg:text-lg font-semibold">
            <p>{name}</p>
        </div>
        <div className="text-lightcream lg:col-span-3 lg:text-base md:text-sm text-xs">
        <p>{description}</p>
        </div>
        </div>
        ))}
        </div>
        </div>
        </>
    );
}

export default Archive;