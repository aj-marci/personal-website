import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Main() {
    return (
      <>
        <div className="md:w-3/4 lg:w-3/4 overflow-y-auto
                       ml-8 mt-8 md:mt-8 mr-4 lg:mt-20">
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </>
    );
  }

  export default Main;