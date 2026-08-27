import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Prompt Engineer Intern",
    company: "Intellisys Pvt Ltd",
    duration: "August 2026 - Present",
    description:
      "Working on AI/ML-focused tasks with an emphasis on prompt engineering, developing effective prompts, experimenting with AI systems, and exploring practical applications of generative AI.",
    technologies: [
      "Prompt Engineering",
      "AI/ML",
      "Generative AI",
      "Python",
      "LLMs",
    ],
  },
  {
    role: "Student Developer",
    company: "Academic & Personal Projects",
    duration: "2024 - Present",
    description:
      "Developing academic and personal projects using programming, web development, databases, and modern development tools while continuously improving practical problem-solving skills.",
    technologies: [
      "Python",
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Git & GitHub",
    ],
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <span>Experience</span>

        <h2>My Professional Journey</h2>

        <p>
          My journey through internships, development, learning, and
          hands-on projects.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <span className="experience-date">
                {item.duration}
              </span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <div className="technology-list">
                {item.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;