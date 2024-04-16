import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const archiveData = [
    {
        date: "January, 2024",
        name: "Unlayer Email Editor",
        url: "https://github.com/aj-marci/unlayer-aj",
        description: "Embedded Unlayer's TypeScript drag & drop email editor into a React app to design and download email templates."
    },
    {
        date: "November, 2023",
        name: "Admin Dashboard",
        url: "https://ajmarci.com/admin",
        description: "Login with Firebase auth, fetched contact form data in pleasant UI. Visualizing Google Analytics data with v4 API, OAuth, and Recharts in progress."
    },
    {
        date: "October, 2023",
        name: "NASA APOD API",
        url: "https://github.com/aj-marci/NASA",
        description: "Live app under construction. View a new NASA astronomy image daily. React frontend styled with TailwindCSS, deployed on Vercel. Express.js, Node.js, and MongoDB backend deployed on Heroku."
    },
    {
        date: "October, 2023",
        name: "Metaphor Search API",
        url: "https://github.com/aj-marci/metaphor-api",
        description: "Fetched and rendered the top 2023 Ryder Cup articles using the Metaphor AI Search API. React frontend with Express.js and Node.js backend."
    },
    {
        date: "August, 2023",
        name: "Personal Spotify App",
        url: "https://github.com/aj-marci/spotify-app",
        description: "Full stack web app to visualize my Spotify data with the help of Express, Node.js, React, Styled Components, and the Spotify Web API."
    },
    {
        date: "June. 2023",
        name: "Personal Website",
        url: "https://github.com/aj-marci/personal-website",
        description: "My v1 personal website. Built with React.js and styled with TailwindCSS. Firebase used for database, hosting, and auth. Updates deployed with GitHub Actions",
    },
    {
        date: "May, 2023",
        name: "v2 Restaurant Homepage Template",
        url: "https://github.com/aj-marci/capstone",
        description: "Restaurant homepage template with ability to reserve a table. Built with React.js, styled with React-Bootstrap and JSX. Form validation with with Formik and Yup.",
    },
    {
        date: "April, 2023",
        name: "App Registration Form",
        url: "https://github.com/aj-marci/react-registration",
        description: "Website registration form with client-side validaiton. Built with React.js, and styled with CSS and JSX.",
    },
    {
        date: "April, 2023",
        name: "Calculator App",
        url: "https://github.com/aj-marci/react-calcuator",
        description: "A simple calculator app. Built with React.js, and styled with CSS and JSX.",
    },
    {
        date: "March, 2023",
        name: "Portfolio Website Template",
        url: "https://github.com/aj-marci/portfolio",
        description: "Desktop only, built with React.js, and styled with ChakraUI. Form validation with useFormik and Yup.",
    },
    {
        date: "March, 2023",
        name: "v1 Restaurant Homepage Template",
        url: "https://github.com/aj-marci/BASIC-HTML-CSS.",
        description: "Classic responsive restaurant homepage template. Built with only HTML and CSS.",
    },
]

function Archive() {
    return (
        <>
        <div className="bg-background">
        <button className="bg-background text-turqoise mb-8 mt-4 ml-2 hover:text-orange
                            hover:-translate-x-1">
        <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
        </Link>
        </button>
        </div>
        <div className="bg-background font-gotham pl-2 pb-8">
            <h1 className="text-2xl font-semibold text-lightcream">Project Archive</h1>
            <h className="text-sm text-darkcream">Click a project to view code or live app.</h>
        </div>
        <div className="bg-background lg:h-screen lg:pb-0 pb-8">
        {archiveData.map(({ date, name, description, url}) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
        <div key={name} className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-4
        font-gotham hover:bg-groupHover lg:mb-8 md:mb-8 mb-4 ml-2 mr-2">
        <div className="text-orange lg:col-span-1 lg:text-sm md:text-xs text-xs">
            <p>{date}</p>
        </div>
        <div className="text-lightcream lg:col-span-1 lg:text-lg font-semibold">
            <p>{name}</p>
        </div>
        <div className="text-lightcream lg:col-span-3 lg:text-base md:text-sm text-xs">
        <p>{description}</p>
        </div>
        </div>
        </a>
        ))}
        </div>
        </>
    );
}

export default Archive;