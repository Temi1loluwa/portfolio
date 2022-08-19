import React from "react";
import "./styles/Skills.scss";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_container">
        <h1>My Skills</h1>
        <p>Here are a few skills i possess</p>
        <div className="icon">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-node-js"></i>
          <i class="fa-brands fa-css3"></i>
        </div>
      </div>
    </div>
  );
};
export default Skills;
