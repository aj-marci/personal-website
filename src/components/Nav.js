import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';

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
                          lg:ml-10 md:ml-8 ml-8
                          font-gotham">
              <h1 className="text-lightcream lg:text-3xl md:text-2xl text-xl
                            lg:mb-2 md:mb-2 mb-1 font-semibold">
                Alex (AJ) Marcinek II</h1>
              <h2 className="text-lightcream
                            lg:text-xl md:text-lg text-base max-w-md">
                Software engineer and designer. Building, learning, and
                creating are my passions.</h2>
              <ul className="text-turqoise lg:mt-10 md:mt-10 mt-6 font-semibold">
                <nav>
                  <li className="mb-1 hover:translate-x-1 hover:text-orange">
                    <a onClick={handleClick("about")}
                      href="/#about-section">About</a>
                  </li>
                  <li className="mb-1 hover:translate-x-1 hover:text-orange">
                    <a onClick={handleClick("exp")}
                      href="/#exp-section">Experience</a>
                  </li>
                  <li className="hover:translate-x-1 hover:text-orange">
                    <a onClick={handleClick("projects")}
                      href="/#projects-section">Projects</a>
                  </li>
                  <div className="lg:mt-10 md:mt-10 mt-6">
                  <a href="mailto: abmarcinek@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="text-turqoise hover:text-orange mr-2">
                    <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                  </a>
                  <a href="https://github.com/aj-marci" target="_blank" rel="noopener noreferrer"
                  className="text-turqoise hover:text-orange mr-2">
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
                  </a>
                  <a href="https://open.spotify.com/user/wp8iqfaytwv3zqmn80cabyvqs?si=2d1e11409d864f5b" target="_blank" rel="noopener noreferrer"
                  className="text-turqoise hover:text-orange">
                    <FontAwesomeIcon icon={faSpotify} size="xl"/>
                  </a>
                  </div>
                </nav>
              </ul>
          </div>
        </>
      );
    }

    export default Nav;