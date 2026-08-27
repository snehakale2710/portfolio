import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "🌐", level: "90%" },
  { name: "CSS", icon: "🎨", level: "85%" },
  { name: "JavaScript", icon: "⚡", level: "80%" },
  { name: "React.js", icon: "⚛️", level: "80%" },
  { name: "Vite", icon: "⚡", level: "75%" },
  { name: "Python", icon: "🐍", level: "80%" },
  { name: "C", icon: "💻", level: "80%" },
  { name: "C++", icon: "⚙️", level: "75%" },
  { name: "SQL", icon: "🗄️", level: "80%" },
  { name: "Node.js", icon: "🟢", level: "70%" },
  { name: "Express.js", icon: "🚀", level: "70%" },
  { name: "Git & GitHub", icon: "🔧", level: "80%" },
  { name: "Power BI", icon: "📊", level: "75%" },
  { name: "APIs", icon: "🔗", level: "70%" },
  { name: "AI / ML", icon: "🤖", level: "75%" },
  { name: "Prompt Engineering", icon: "🧠", level: "85%" },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <span>My Skills</span>

        <h2>Technologies I Work With</h2>

        <p>
          A collection of technologies and tools I use to build applications,
          solve problems, and explore AI-driven solutions.
        </p>
      </div>

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