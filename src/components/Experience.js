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
        point1: "",
        point2: "",
        point3: "",
    },
    {
        date: "2017 - 2020",
        title: "Co-founder & CEO",
        place: "CropShop",
        point1: "",
        point2: "",
        point3: "",
    },
]

function Experience() {
    return (
        <>
        {experienceData.map(({ date, title, place, point1, point2, point3}) => (
        <div key={date} id="exp-section"
        className="container p-2 rounded hover:bg-groupHover
                    font-gotham lg:mb-16 md:mb-12 mb-8">
            <p className="text-darkcream lg:text-sm md:text-sm text-xs mb-1">{date}</p>
            <p className="text-orange lg:text-base md:text-base text-sm mb-1">{title}</p>
            <p className="text-darkcream lg:text-base md:text-base text-sm mb-1">{place}</p>
            <ul className="text-lightcream lg:text-sm md:text-sm text-xs mb-1">
                <li>{point1}</li>
                <li>{point2}</li>
                <li>{point3}</li>
            </ul>
        </div>
        ))}
        <button className="lg:mb-24 md:mb-20 mb-8 font-gotham font-semibold
                            text-turqoise hover:text-orange"
                            >View Full Resume</button>
        </>
    );
  }

  export default Experience;