import React, {useState} from 'react';

function Experience() {

  const [selectedSkills, setSelectedSkills] = useState("");

    const renderSection = (skills) => {
    if (skills === "Libraries & Frameworks") {
      return (
        <div className='mt-2 lg:text-base md:text-base text-sm font-gotham font-semibold'>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1">React.js</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Express.js</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Node.js</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Bootstrap</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">TailwindCSS</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">ChakraUI</p>
        </div>
      );
    } else if (skills === "Languages") {
      return (
        <div className='mt-2 lg:text-base md:text-base text-sm font-gotham font-semibold'>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1">HTML</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">CSS</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">JavaScript</p>
        </div>
      );
    } else if (skills === "Deployment") {
        return (
          <div className='mt-2 lg:text-base md:text-base text-sm font-gotham font-semibold'>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1">Vercel</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Heroku</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Firebase Hosting</p>
        </div>
      );
    } else if (skills === "Additional") {
        return (
          <div className='mt-2 lg:text-base md:text-base text-sm font-gotham font-semibold'>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1">MongoDB</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Firestore</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">GitHub</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Figma</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">REST</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">OAuth</p>
          <p className="inline-flex items-center justify-center rounded bg-bdbg
                        text-orange px-1 py-1 ml-2">Jest</p>
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
        onClick={() => setSelectedSkills("Libraries & Frameworks")}>Libraries & Frameworks |</button>
        <button className='pl-1 hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Languages")}>Languages |</button>
        <button className='pl-1 hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Deployment")}>Deployment |</button>
        <button className='pl-1 hover:text-orange focus:text-orange'
        onClick={() => setSelectedSkills("Additional")}>Additional</button>
      </div>
      <div className="text-darkcream font-gotham">
      {renderSection(selectedSkills)}
      </div>
    </>
    );
  }

  export default Experience;