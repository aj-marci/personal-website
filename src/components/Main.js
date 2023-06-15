import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import Archive from "../Archive";

function Main() {
    return (
      <>
        <div className="text-lightcream md:w-3/4 lg:w-3/4 overflow-y-auto
                       ml-8 mt-8 md:mt-8 mr-4 lg:mt-20">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </>
    );
  }

  export default Main;