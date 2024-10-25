import React, {useState} from 'react';

function Experience() {

  // accordian state
  const [technicalVisible, setTechnicalVisible] = useState(false);
  const [growthVisible, setGrowthVisible] = useState(false);
  const [csVisible, setCsVisible] = useState(false);


  return (
    <>
  <div className="font-extrabold drop-shadow-lg font-gotham">
      <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-charcoal lg:text-xl md:text-xl text-base" id="skills-section">
        <h1>Skills</h1>
      </div>
      <div
        className='text-darkGreen lg:text-lg md:text-lg text-base
        pl-4 mb-4 py-2 hover:cursor-pointer hover:text-medGreen hover:translate-x-1
        border-l-2 border-lightGreen'
        onClick={() => setTechnicalVisible(!technicalVisible)}
      >
        Technical
        {technicalVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs grid grid-cols-3 gap-1 text-charcoal'>
            <p>JavaScript</p>
            <p>React</p>
            <p>Express.js</p>
            <p>Node.js</p>
            <p>Angular</p>
            <p>Vue</p>
            <p>GCP</p>
            <p>Firebase</p>
            <p>AWS</p>
            <p>Heroku</p>
            <p>MongoDB</p>
            <p>REST</p>
            <p>GitHub</p>
            <p>Vercel</p>
            <p>Fly.io</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Jira</p>
          </div>
        )}
      </div>
      <div
        className='text-darkGreen lg:text-lg md:text-lg text-base
        pl-4 mb-4 py-2 hover:cursor-pointer hover:text-medGreen hover:translate-x-1
        border-l-2 border-medGreen'
        onClick={() => setGrowthVisible(!growthVisible)}
      >
        Marketing
        {growthVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs grid grid-cols-3 gap-1 text-charcoal'>
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
        className='text-darkGreen lg:text-lg md:text-lg text-base
        pl-4 mb-4 py-2 hover:cursor-pointer hover:text-medGreen hover:translate-x-1
        border-l-2 border-darkGreen'
        onClick={() => setCsVisible(!csVisible)}
      >
        Customer Success
        {csVisible && (
          <div className='mt-2 lg:text-base md:text-base text-xs grid grid-cols-3 gap-1 text-charcoal'>
            <p>Vitally</p>
            <p>ZenDesk</p>
            <p>Salesforce</p>
            <p>SalesLoft</p>
            <p>Intercom</p>
            <p>SaaS Sales</p>
          </div>
        )}
      </div>
  </div>
    </>
  );
  }

  export default Experience;