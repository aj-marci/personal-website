import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Resume from "../aj.resume.pdf";


function Experience() {
    return (
    <>
      <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream
                        lg:text-xl md:text-xl text-base font-semibold"
                        id="exp-section">
          <h1>Education</h1>
      </div>
      <div className="text-darkcream font-gotham pl-4">
        <ol className="relative border-l-2 border-turqoise">
          <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
              <p className="text-sm italic">2022</p>
              <p className="font-semibold lg:text-base md:text-base text-sm">Certified Professional Frontend Developer from Meta.</p>
          </li>
          <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
              <p className="text-sm italic">2019</p>
              <p className="font-semibold">B.S. in Environmental Science from Endicott College.</p>
          </li>
        </ol>
      </div>
    </>
    );
  }

  export default Experience;