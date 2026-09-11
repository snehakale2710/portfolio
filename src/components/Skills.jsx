import React from "react";
import "./Skills.css";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <SectionHeading
        label="My Skills"
        title="Technologies I Work With"
        description="A collection of technologies and tools I use to build applications, solve problems, and explore AI-driven solutions."
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
            </div>

            <div className="skill-bar">
              <span style={{ width: skill.level }}></span>
            </div>

            <small>{skill.level}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;