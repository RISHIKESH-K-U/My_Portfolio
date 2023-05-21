import MyImage from "./Images/Image1.jpg";
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
          Hi Everyone !!! 🚀 Welcome to my portfolio! ✨Let me tell you all
          about myself
        </h1>
      </div>
    </div>
  );
};

export default Introduction;
