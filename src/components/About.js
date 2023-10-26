import Certif from "../code.meta.certif.pdf";
import Content from "../content.creation.pdf";
import AudRog from "../aud.rog.pdf";

function About() {
    return (
        <>
        <div id="about-section"
        className="lg:mb-24 md:mb-20 mb-8
        text-lightcream lg:text-base md:text-base text-xs max-w-md
        font-gotham leading-relaxed">
            <p className="lg:mb-2 md:mb-2 mb-1">In my senior year of college
                                                I embarked on Co-founding
            <a href="https://www.endicott.edu/news-events/news/news-articles/2019/02/student-startup-living-proof-of-endicotts-entrepreneurial-spirit" target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> CropShop
            </a>,
            a B2B marketplace for Chefs and Local Farmers.
            </p>
            <p className="lg:mb-2 md:mb-2 mb-1">
            For 4 years my focus was sales, marketing, operations,
            <a href={Content}
                target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> content creation
            </a>, and UI / UX. In 2022
            I
            <a href={Certif}
                target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> completed
            </a> Meta's professional front-end
            developer course.
            </p>
            <p>
            When not at my computer, you can find me cooking, golfing, hiking,
            or anything else outside with my girlfriend
            <a href={AudRog}
                target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> Audry
            </a> and our Pup Roger.
            </p>
        </div>
        </>
    );
  }

  export default About;