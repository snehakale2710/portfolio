
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
        description="A collection of technologies and tools I use to build applications, develop solutions, work with data, and explore AI-driven technologies."
      />

      <div className="skills-categories">
        {skills.map((category) => (
          <div className="skills-category" key={category.category}>
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.category}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-item-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
