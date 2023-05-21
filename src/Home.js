import Contact from "./Contact";
import Introduction from "./Introduction";
import Project from "./Project";
import Skills from "./Skills";
import "./CSS/home.css";
import Education from "./Education";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <Project />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
