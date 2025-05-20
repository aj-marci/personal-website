import Content from "../content.creation.pdf";
import AudRog from "../aud.rog.pdf";

function About() {
    return (
        <>
        <div id="about-section"
        className="lg:mb-24 md:mb-20 mb-8
        text-charcoal lg:text-base md:text-base text-xs max-w-md
        font-gotham leading-relaxed font-extrabold lg:border-r-4 lg:border-medGreen lg:pr-20">
            <p className="lg:mb-2 md:mb-2 mb-1">In my senior year of college
                                                I embarked on co-founding
            <a href="https://www.endicott.edu/news-events/news/news-articles/2019/02/student-startup-living-proof-of-endicotts-entrepreneurial-spirit" target="_blank" rel="noopener noreferrer"
                className="text-darkGreen hover:text-lightGreen font-bold underline decoration-dotted"> CropShop</a>,
            a B2B marketplace platform connecting Chefs and Local Farmers.
            </p>
            <p className="lg:mb-2 md:mb-2 mb-1">
            Since co-founding CropShop, I've worked cross-functionally throughout 
            sales, customer success, operations, and software engineering.
            </p>
            <p className="lg:mb-2 md:mb-2 mb-1">I'm proud to currently be managing enterprise accounts 
            as a Technical Customer Success Manager at <a href="https://unlayer.com/embed" target="_blank" rel="noopener noreferrer"
                className="text-darkGreen hover:text-lightGreen font-bold underline decoration-dotted">Unlayer
            </a>. My accounts include U.S. based Fortune 500 companies and internationally based market leaders. 
            </p>
            <p>
            If I'm not at my computer you can find me cooking, golfing, hiking,
            or anything else outside with my wife <a href={AudRog}
                target="_blank" rel="noopener noreferrer"
                className="text-darkGreen hover:text-lightGreen font-bold underline decoration-dotted"> Audry
            </a> and our pup Roger.
            </p>
        </div>
        </>
    );
  }

  export default About;