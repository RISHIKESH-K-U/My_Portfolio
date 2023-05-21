import { Link } from "react-router-dom";
import "./CSS/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Link>ABOUT ME</Link> */}
      <Link to="https://github.com/RISHIKESH-K-U">MY GITHUB PROFILE</Link>
    </div>
  );
};

export default Navbar;
