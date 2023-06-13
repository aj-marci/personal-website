

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
          <div className="lg:w-1/2 md:w-1/2 sm:w-full lg:fixed ml-8 mt-16
                          md:ml-8 md:mt-16
                          lg:ml-10 lg:mt-20">
              <h1 className="text-lightcream lg:text-2xl md:text-xl text-lg
                            lg:mb-2 md:mb-2 mb-1">
                Alex (AJ) Marcinek II</h1>
              <h2 className="text-lightcream lg:mb-5 md:mb-5 mb-3
                            lg:text-lg md:text-base text-sm max-w-md">
                software engineer and designer. building, learning, and creating are my passions.</h2>
              <ul className="text-turqoise">
                  <li>About</li>
                  <li>experience</li>
                      <li>
                      <a href="#projects-section"></a>
                        Projects
                      </li>
              </ul>
          </div>
        </>
      );
    }
  
    export default Nav;