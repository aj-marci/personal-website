import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Resume from "../v6.resume.pdf";

const experienceData = [
    {
        id: 0,
        date: "2022 - Current",
        title: "Software Engineer",
        place: "Freelance",
        point1: "Full stack engineer specialized in Frontend with React.",
        point2: "Meta Certified Frontend Developer.",
        point3: "Click View All Projects below to see full project archive.",
    },
    {
        id: 1,
        date: "2020 - Current",
        title: "Senior Experience Manager, Marketing Associate",
        place: "GOBY",
        point1: "Design marketing assets, manage paid and unpaid consumer marketing channels.",
        point2: "Responsible for all consumer CS, and eliminated the need for an additional CX hire.",
        point3: "All D2C inventory forecasting and fulfillment oversight.",
    },
    {
        id: 2,
        date: "2017 - 2020",
        title: "Co-founder & CEO",
        place: "CropShop",
        point1: "Responsible for sales, finance, marketing, UI / UX.",
        point2: "Generated $60,000 in revenue, and raised $85,000 in Angel funds.",
        point3: "Y Combinator Startup School Graduate Summer 2019, 1st place winner of Endicott College’s pitch competition.",
    },
]

function Experience() {
    return (
        <>
        {experienceData.map(({ id, date, title, place, point1, point2, point3}) => (
        <div key={id} id="exp-section"
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
        <a href={Resume}
            target="_blank"
            rel="noopener noreferrer">
                View Full Resume <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </a>
        </div>
        </>
    );
  }

  export default Experience;