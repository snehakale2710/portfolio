import React from "react";
import "./Projects.css";
import SectionHeading from "./SectionHeading";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <SectionHeading
        label="My Projects"
        title="Things I've Built"
        description="Some of my academic, personal and development projects."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>Features</h4>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;