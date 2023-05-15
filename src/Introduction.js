import MyImage from "./Images/Image1.jpg";
import pikachu from "./Images/Pikachu.gif";
import "./CSS/intro.css";
import Navbar from "./Navbar";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="navig">
        <Navbar />
      </div>
      <div className="introductionc">
        <img src={MyImage} alt="My Image" class="MyImg" />
        <h1>
          Welcome to my portfolio! ✨ Let's embark on a creative journey
          together, where innovation and passion meet to create extraordinary
          experiences! 🚀
        </h1>
      </div>
    </div>
  );
};

export default Introduction;
