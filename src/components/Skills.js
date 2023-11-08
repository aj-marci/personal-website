import React, {useState} from 'react';

function Experience() {

  const [selectedSkills, setSelectedSkills] = useState("");

    const renderSection = (skills) => {
    if (skills === "Libraries & Frameworks") {
      return (
        <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
                      grid-col cols-1 rounded bg-bdbg
                      text-orange px-1 py-1 w-28'>
          <p>React.js</p>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>Bootstrap</p>
          <p>TailwindCSS</p>
          <p>ChakraUI</p>
        </div>
      );
    } else if (skills === "Languages") {
      return (
        <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
        grid-col cols-1 rounded bg-bdbg
        text-orange px-1 py-1 w-28'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Ruby on Rails</p>
        </div>
      );
    } else if (skills === "Deployment") {
        return (
          <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
          grid-col cols-1 rounded bg-bdbg
          text-orange px-1 py-1 w-32'>
            <p>Vercel</p>
            <p>Heroku</p>
            <p>Firebase</p>
            <p>Fly.io</p>
            <p>GitHub Actions</p>
        </div>
      );
    } else if (skills === "Additional") {
        return (
          <div className='mt-2 lg:text-base md:text-base text-xs font-gotham font-semibold
          grid-col cols-1 rounded bg-bdbg
          text-orange px-1 py-1 w-28'>
            <p>MongoDB</p>
            <p>Firestore</p>
            <p>GitHub</p>
            <p>Figma</p>
            <p>REST</p>
            <p>OAuth</p>
            <p>Jest</p>
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
      <div className='font-gotham text-turqoise lg:text-lg md:text-lg text-base'>
        <button className='hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Libraries & Frameworks")}>Libraries & Frameworks</button>
        <button className='pl-2 text-darkcream hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Languages")}>Languages</button>
        <button className='lg:pl-2 md:pl-2 pl-1 hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Deployment")}>Deployment</button>
        <button className='pl-2 text-darkcream md:pl-2 hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Additional")}>Additional</button>
      </div>
      <div className="text-darkcream font-gotham">
      {renderSection(selectedSkills)}
      </div>
    </>
    );
  }

  export default Experience;