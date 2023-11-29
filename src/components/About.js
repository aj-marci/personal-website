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
                                                I embarked on co-founding
            <a href="https://www.endicott.edu/news-events/news/news-articles/2019/02/student-startup-living-proof-of-endicotts-entrepreneurial-spirit" target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> CropShop
            </a>,
            a B2B marketplace for Chefs and Local Farmers.
            </p>
            <p className="lg:mb-2 md:mb-2 mb-1">
            Since co-founding CropShop, I've worked cross-functionally in sales, marketing, operations,
            <a href={Content}
                target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> content creation
            </a>, frontend development, and UI / UX.
            </p>
            <p>
            When not at my computer, you can find me cooking, golfing, hiking,
            or anything else outside with my girlfriend
            <a href={AudRog}
                target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> Audry
            </a> and our pup Roger.
            </p>
        </div>
        </>
    );
  }

  export default About;