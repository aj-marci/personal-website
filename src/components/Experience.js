import React, {useState} from 'react';
import Resume from "../abm.resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Experience() {

  const [educationVisible, setEducationVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);

  return (
    <>
<div className="font-extrabold drop-shadow-lg font-gotham">
    <div className="lg:mt-24 md:mt-20 mt-8 mb-2
    lg:text-xl md:text-xl text-base  text-charcoal"
    id="career-section">
      <h1>Career</h1>
    </div>
      <div className='text-darkGreen lg:text-lg md:text-lg text-base
        pl-4 mb-6 py-2 hover:cursor-pointer hover:text-medGreen hover:translate-x-1
        border-l-2 border-lightGreen'
        onClick={() => setEducationVisible(!educationVisible)}
      >
        Education
      {educationVisible && (
        <ol>
        <li className="my-6 ml-4">
          <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2022</p>
          <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
            Certified Professional Frontend Developer from Meta.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2019</p>
          <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
            B.S. in Environmental Science from Endicott College.
          </p>
        </li>
      </ol>
      )}
    </div>
    <div className='text-darkGreen lg:text-lg md:text-lg text-base
        pl-4 mb-4 py-2 hover:cursor-pointer hover:text-medGreen hover:translate-x-1
        border-l-2 border-medGreen'
        onClick={() => setWorkVisible(!workVisible)}>
      Work
      {workVisible && (
            <ol>
              <li className="my-6- ml-4">
                <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2024-current</p>
                <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  Technical Customer Success Manager at Unlayer
                </p>
              </li>
            <li className="my-6 ml-4">
              <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2022-2023</p>
             <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  Freelance Software Engineer
              </p>
              </li>
              <li className="my-6 ml-4">
              <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2021-2024</p>
              <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  Senior Experience Manager, Marketing Associate at Goby
               </p>
               </li>
                <li className="my-6 ml-4">
                <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2017-2021</p>
                <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  Co-founder & CEO at CropShop
                </p>
               </li>
                </ol>
           )}
          </div>
      <div className='text-darkGreen lg:text-lg md:text-lg text-base
        pl-4 mb-4 py-2 hover:cursor-pointer hover:text-medGreen hover:translate-x-1
        border-l-2 border-darkGreen'
        onClick={() => setAchievementsVisible(!achievementsVisible)}>
          Achievements
            {achievementsVisible && (
              <ol>
              <li className="my-6 ml-4">
                <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2018</p>
                <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  1st Place Winner of Endicott College's Pitch Competition.
                </p>
              </li>
              <li className="my-6 ml-4">
                <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2015</p>
                <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  Captain of Michigan Warriors Junior A Hockey Team.
                </p>
              </li>
              <li className="my-6 ml-4">
                <p className="lg:text-sm md:text-sm text-xs italic text-charcoal">2012</p>
                <p className="font-gotham font-semibold text-charcoal lg:text-base md:text-base text-xs">
                  MI U-16 AAA Hockey State Champion.
                </p>
              </li>
            </ol>
            )}
          </div>
      <div className="hover:translate-x-1 font-gotham font-extrabold
                text-charcoal hover:text-lightGreen lg:mt-8 md:mt-8 mt-4
                text-base lg:text-lg md:text-lg">
             <a href={Resume}
            target="_blank"
            rel="noopener noreferrer">
                View Full Resume <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </a>
        </div>
  </div>
    </>
    );
  }

  export default Experience;