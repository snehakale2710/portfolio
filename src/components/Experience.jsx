import "./Experience.css";
import SectionHeading from "./SectionHeading";
import experiences from "../data/experiences";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <SectionHeading
        label="Experience"
        title="My Professional Journey"
        description="My journey through internships, development, learning, and hands-on projects."
      />

      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <span className="experience-date">{item.duration}</span>
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