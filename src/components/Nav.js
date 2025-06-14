import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  };

  function Nav() {
      return (
        <>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full lg:fixed lg:mt-20 md:mt-16 mt-16
                          lg:ml-20 md:ml-12 ml-8 lg:pl-12 lg:pt-12 lg:pb-12 
                          font-gotham lg:border-l-4 lg:border-lightGreen drop-shadow-lg font-extrabold">
              <h1 className="text-charcoal lg:text-3xl md:text-2xl text-xl
                            lg:mb-2 md:mb-2 mb-1">
                Alex (AJ) Marcinek II</h1>
              <h2 className="text-charcoal
                            lg:text-xl md:text-lg text-base max-w-md font-semibold">
                Cross-functional leader carrying a diverse background and skillset.</h2>
              <nav>
              <ul className="text-charcoal">
                <div className="lg:mt-36 md:mt-12 mt-8 lg:text-xl md:text-base text-base">
                  <li className="mb-1 hover:translate-x-1 hover:text-lightGreen lg:block md:block hidden">
                    <a onClick={handleClick("about")}
                      href="/#about-section">About</a>
                  </li>
                  <li className="hover:translate-x-1 hover:text-lightGreen lg:block md:block hidden">
                    <a onClick={handleClick("projects")}
                      href="/#projects-section">Projects</a>
                  </li>
                  <li className="hover:translate-x-1 hover:text-lightGreen lg:block md:block hidden">
                    <a onClick={handleClick("experience")}
                      href="/#career-section">Career</a>
                  </li>
                  <li className="hover:translate-x-1 hover:text-lightGreen lg:block md:block hidden">
                    <a onClick={handleClick("experience")}
                      href="/#skills-section">Skills</a>
                  </li>
                  </div>
                  <div className="lg:mt-36 md:mt-12 mt-8 lg:text-4xl md:text-2xl text-2xl">
                  <a href="mailto: abmarcinek@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="text-charcoal hover:text-lightGreen mr-2">
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </a>
                  <a href="https://github.com/aj-marci" target="_blank" rel="noopener noreferrer"
                  className="text-medGreen hover:text-lightGreen mr-2">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href="https://www.linkedin.com/in/a-j-marcinek-318545131/" target="_blank" rel="noopener noreferrer"
                  className="text-darkGreen hover:text-lightGreen">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  </div>
              </ul>
              </nav>
          </div>
        </>
      );
    }

    export default Nav;