import React, {useState} from 'react';

function Experience() {

  const [selectedSkills, setSelectedSkills] = useState("");
  // accordian state
  const [technicalVisible, setTechnicalVisible] = useState(false);
  const [growthVisible, setGrowthVisible] = useState(false);
  const [csVisible, setCsVisible] = useState(false);


    const renderSection = (skills) => {
    if (skills === "Technical") {
      return technicalVisible && (
        <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
        grid grid-cols-3 gap-1 text-darkcream'>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React.js</p>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>GCP</p>
          <p>Heroku</p>
          <p>MongoDB</p>
          <p>REST</p>
          <p>GitHub</p>
          <p>Vercel</p>
        </div>
      );
    } else if (skills === "Growth") {
      return growthVisible && (
        <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
        grid grid-cols-3 gap-1 text-darkcream'>
            <p>Google Ads</p>
            <p>Google Analytics</p>
            <p>Impact</p>
            <p>Meta Ads</p>
            <p>Klaviyo</p>
            <p>Quora</p>
            <p>Affiliate Marketing</p>
        </div>
      );
    } else if (skills === "CS") {
        return csVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
          grid grid-cols-3 gap-1 text-darkcream'>
            <p>ZenDesk</p>
            <p>Salesforce</p>
            <p>SalesLoft</p>
            <p>Intercom</p>
        </div>
      );
    }
  };

    return (
    <>
     <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream
                        lg:text-xl md:text-xl text-base font-semibold"
                        id="skills-section">
        <h1>Skills</h1>
      </div>
      <div className='text-turqoise lg:text-lg md:text-lg text-base
                      bg-groupHover pl-4 rounded-md mb-4 py-2 hover:cursor-pointer'
        onClick={() => {setSelectedSkills("Technical"); setTechnicalVisible(!technicalVisible); }}>
          Technical
        {selectedSkills === "Technical" ? renderSection(selectedSkills): null }
      </div>
      <div className='text-turqoise lg:text-lg md:text-lg text-base
                          bg-groupHover pl-4 rounded-md mb-4 py-2 hover:cursor-pointer'
          onClick={() => {setSelectedSkills("Growth"); setGrowthVisible(!growthVisible); }}>
            Marketing
            {selectedSkills === "Growth" ? renderSection(selectedSkills): null }
      </div>
      <div className='text-turqoise lg:text-lg md:text-lg text-base
                          bg-groupHover pl-4 rounded-md mb-4 py-2 hover:cursor-pointer'
          onClick={() => {setSelectedSkills("CS"); setCsVisible(!csVisible); }}>
            Customer Success
            {selectedSkills === "CS" ? renderSection(selectedSkills): null }
      </div>
    </>
    );
  }

  export default Experience;