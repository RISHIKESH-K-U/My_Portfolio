import "./CSS/footer.css";
import instagram from "./Images/Instagram.png";
import github from "./Images/GitHub.png";
import linkedin from "./Images/LinkedIn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="instagram">
        <Link to="https://www.instagram.com/rish.1001/?next=%2F">
          <img src={instagram} alt="" />
        </Link>
      </div>
      <div className="linkedin">
        <Link to="https://www.linkedin.com/in/rishikesh-k-u-786635224/">
          <img src={linkedin} alt="" />
        </Link>
      </div>
      <div className="github">
        <Link to="https://github.com/RISHIKESH-K-U">
          <img src={github} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
