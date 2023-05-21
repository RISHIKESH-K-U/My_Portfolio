import "./CSS/skills.css";
import C from "./Images/skills/C.jpg";
import Cpp from "./Images/skills/C++.jpg";
import Python from "./Images/skills/Python.jpg";
import CSS from "./Images/skills/CSS.jpg";
import HTML from "./Images/skills/HTML.jpg";
import Java from "./Images/skills/Java.jpg";
import JS from "./Images/skills/JS.jpg";
import node from "./Images/skills/node.png";
import React from "./Images/skills/React.jpg";

const Skills = () => {
  return (
    <div className="skills">
      <h2>MY SKILLS</h2>
      <div className="skill1">
        <div className="C">
          <img src={C} alt="C" />
          <h4>C PROGRAMMING</h4>
        </div>
        <div className="Cpp">
          <img src={Cpp} alt="C++" />
          <h4>C++</h4>
        </div>
        <div className="Python">
          <img src={Python} alt="Python" />
          <h4>Python</h4>
        </div>
        <div className="CSS">
          <img src={CSS} alt="CSS" />
          <h4>CSS</h4>
        </div>
        <div className="HTML">
          <img src={HTML} alt="HTML" />
          <h4>HTML</h4>
        </div>
      </div>
      <div className="skill2">
        <div className="Java">
          <img src={Java} alt="Java" />
          <h4>Java</h4>
        </div>
        <div className="JS">
          <img src={JS} alt="JS" />
          <h4>JS</h4>
        </div>
        <div className="node">
          <img src={node} alt="node" />
          <h4>NODE JS</h4>
        </div>
        <div className="React">
          <img src={React} alt="React" />
          <h4>React</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
