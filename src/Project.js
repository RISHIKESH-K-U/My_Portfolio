import { Link } from "react-router-dom";
import "./CSS/project.css";
const Project = () => {
  return (
    <div className="project">
      <h2>MY PROJECTS</h2>
      <div className="cards">
        <div className="card1">
          <h3>EcoConnect</h3>
          <p>
            EcoConnect is a website that enables users to effective manage
            plastic wastes,sell resusable items and be a part of community that
            focusses on effective disposal of waste
          </p>
          <Link
            to="https://github.com/RISHIKESH-K-U/EcoConnect"
            style={{ textDecoration: "none" }}
          >
            <button>VIEW CODE</button>
          </Link>
        </div>
        <div className="card2">
          <h3>Stumps and Stories</h3>
          <p>
            Stumps and Stories is a website that enables users to create and
            delete blogs regarding the game of cricket
          </p>
          <Link
            to="https://github.com/RISHIKESH-K-U/Stumps-And-Stories"
            style={{ textDecoration: "none" }}
          >
            <button>VIEW CODE</button>
          </Link>
        </div>
        <div className="card3">
          <h3>Skywatch</h3>
          <p>
            Skywatch is a basic web app that utilizes NodeJS and Express to
            display the current weather details of any place using
            OpenWeatherMap API
          </p>
          <Link
            to="https://github.com/RISHIKESH-K-U/skywatch"
            style={{ textDecoration: "none" }}
          >
            <button>VIEW CODE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
