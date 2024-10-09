import React, {useState} from 'react';

function Experience() {

  // accordian state
  const [technicalVisible, setTechnicalVisible] = useState(false);
  const [growthVisible, setGrowthVisible] = useState(false);
  const [csVisible, setCsVisible] = useState(false);


  return (
    <>
      <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream lg:text-xl md:text-xl text-base font-semibold" id="skills-section">
        <h1>Skills</h1>
      </div>
      <div
        className='text-turqoise lg:text-lg md:text-lg text-base bg-groupHover pl-4
            rounded-md mb-4 py-2 hover:cursor-pointer hover:text-orange hover:font-semibold'
        onClick={() => setTechnicalVisible(!technicalVisible)}
      >
        Technical
        {technicalVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold grid grid-cols-3 gap-1 text-darkcream'>
            <p>JavaScript</p>
            <p>React</p>
            <p>Express.js</p>
            <p>Node.js</p>
            <p>Angular</p>
            <p>Vue</p>
            <p>GCP</p>
            <p>AWS</p>
            <p>Heroku</p>
            <p>MongoDB</p>
            <p>REST</p>
            <p>GitHub</p>
            <p>Vercel</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Jira</p>
          </div>
        )}
      </div>
      <div
        className='text-turqoise lg:text-lg md:text-lg text-base bg-groupHover
          pl-4 rounded-md mb-4 py-2 hover:cursor-pointer hover:text-orange hover:font-semibold'
        onClick={() => setGrowthVisible(!growthVisible)}
      >
        Marketing
        {growthVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold grid grid-cols-3 gap-1 text-darkcream'>
            <p>Google Ads</p>
            <p>Impact</p>
            <p>Google Analytics</p>
            <p>Meta Ads</p>
            <p>Klaviyo</p>
            <p>Quora</p>
            <p>Affiliate Marketing</p>
          </div>
        )}
      </div>
      <div
        className='text-turqoise lg:text-lg md:text-lg text-base bg-groupHover
          pl-4 rounded-md mb-4 py-2 hover:cursor-pointer hover:text-orange hover:font-semibold'
        onClick={() => setCsVisible(!csVisible)}
      >
        Customer Success
        {csVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold grid grid-cols-3 gap-1 text-darkcream'>
            <p>Vitally</p>
            <p>ZenDesk</p>
            <p>Salesforce</p>
            <p>SalesLoft</p>
            <p>Intercom</p>
          </div>
        )}
      </div>
    </>
  );
  }

  export default Experience;