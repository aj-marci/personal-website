import React, {useState} from 'react';
import Resume from "../resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Experience() {

  const [educationVisible, setEducationVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);

  return (
    <>
    <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream
    lg:text-xl md:text-xl text-base font-semibold"
    id="career-section">
      <h1>Career</h1>
    </div>
      <div className='text-turqoise lg:text-lg md:text-lg text-base bg-groupHover
        pl-4 rounded-md mb-4 py-2 hover:cursor-pointer hover:text-orange hover:font-semibold'
        onClick={() => setEducationVisible(!educationVisible)}
      >
        Education
      {educationVisible && (
        <ol className="relative border-l-2 border-turqoise mt-2">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
          <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2022</p>
          <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
            Certified Professional Frontend Developer from Meta.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
          <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2019</p>
          <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
            B.S. in Environmental Science from Endicott College.
          </p>
        </li>
      </ol>
      )}
    </div>
    <div className='text-turqoise lg:text-lg md:text-lg text-base bg-groupHover
        pl-4 rounded-md mb-4 py-2 hover:cursor-pointer hover:text-orange hover:font-semibold'
        onClick={() => setWorkVisible(!workVisible)}>
      Work
      {workVisible && (
            <ol className="relative border-l-2 border-turqoise mt-2">
              <li className="mb-10 ml-4">
                <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
                <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2024-current</p>
                <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  Technical Customer Success Manager at Unlayer
                </p>
              </li>
            <li className="mb-10 ml-4">
            <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
              <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2022-2023</p>
             <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  Software Engineer at Freelance
              </p>
              </li>
              <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
              <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2021-2024</p>
              <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  Senior Experience Manager, Marketing Associate at Goby
               </p>
               </li>
                <li className="mb-10 ml-4">
                <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
                <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2017-2021</p>
                <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  Co-founder & CEO at CropShop
                </p>
               </li>
                </ol>
           )}
          </div>
      <div className='text-turqoise lg:text-lg md:text-lg text-base bg-groupHover
          pl-4 rounded-md mb-4 py-2 hover:cursor-pointer hover:text-orange hover:font-semibold'
        onClick={() => setAchievementsVisible(!achievementsVisible)}>
          Achievements
            {achievementsVisible && (
              <ol className="relative border-l-2 border-turqoise mt-2">
              <li className="mb-10 ml-4">
                <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
                <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2018</p>
                <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  1st Place Winner of Endicott College's Pitch Competition.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
                <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2015</p>
                <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  Captain of Michigan Warriors Junior A Hockey Team.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-4 h-4 -ml-6 rounded-full bg-turqoise"></div>
                <p className="lg:text-sm md:text-sm text-xs italic text-darkcream font-normal">2012</p>
                <p className="font-gotham font-semibold text-darkcream lg:text-base md:text-base text-xs">
                  MI U-16 AAA Hockey State Champion.
                </p>
              </li>
            </ol>
            )}
          </div>
      <div className="hover:translate-x-1 font-gotham font-semibold
                text-turqoise hover:text-orange lg:mt-8 md:mt-8 mt-4">
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