import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const experienceData = [
    {
        date: "2022 - Current",
        title: "Aspiring Full-time Software Engineer",
        place: "Maybe you?",
        point1: "Meta Professionally Certified",
        point2: "HTML, JavaScript (JS6), CSS",
        point3: "React.js, Bootstrap, Tailwind CSS, Formik, Yup.",
    },
    {
        date: "2020 - Current",
        title: "Senior Experience Manager, Marketing Associate",
        place: "GOBY",
        point1: "Design marketing assets, manage paid and unpaid consumer marketing channels.",
        point2: "Responsible for all consumer CS, and eliminated the need for an additional CX hire",
        point3: "All D2C inventory forecasting and fulfillment oversight.",
    },
    {
        date: "2017 - 2020",
        title: "Co-founder & CEO",
        place: "CropShop",
        point1: "Responsible for sales, finance, marketing, UI / UX",
        point2: "Generated $60,000 in revenue, and raised $85,000 in Angel fund",
        point3: "Y Combinator Startup School Graduate Summer 2019, 1st place winner of Endicott College’s “Spark Tank” pitch competition",
    },
]

function Experience() {
    return (
        <>
        {experienceData.map(({ date, title, place, point1, point2, point3}) => (
        <div key={date} id="exp-section"
        className="container font-gotham lg:mb-16 md:mb-12 mb-8">
            <p className="text-darkcream lg:text-sm md:text-sm text-xs mb-1">{date}</p>
            <p className="text-lightcream lg:text-base md:text-base
                            text-sm mb-1 font-semibold">{title}</p>
            <p className="text-darkcream lg:text-base md:text-base
                            text-sm mb-1 font-semibold">{place}</p>
            <ul className="text-lightcream lg:text-sm md:text-sm text-xs mb-1">
                <li>- {point1}</li>
                <li>- {point2}</li>
                <li>- {point3}</li>
            </ul>
        </div>
        ))}
        <div className="lg:mb-24 md:mb-20 mb-8 font-gotham font-semibold
                        text-turqoise hover:text-orange hover:translate-x-1">
        <a href="https://docs.google.com/document/d/19j9jHAWJtvF_hbHRsyslhcJaGzy2a5CsQRLxFedp_Kc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
                View Full Resume <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </a>
        </div>
        </>
    );
  }

  export default Experience;