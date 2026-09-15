import React from "react";
import "./Education.css";
import achievements from "../data/certifications";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-heading">
        <span>Education</span>
        <h2>My Educational Journey</h2>
        <p>
          My academic background and qualifications that shaped my technical
          knowledge and career journey.
        </p>
      </div>

      <div className="education-container">
        <div className="education-card">
          <div className="education-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="education-content">
            <span className="education-year">2026 - Present</span>
            <h3>Master of Computer Applications (MCA)</h3>
            <h4>
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology,
              Pune
            </h4>
            <p>
              Focused on computer applications, software development,
              programming, and emerging technologies.
            </p>
            <div className="education-tags">
              <span>MCA</span>
              <span>Computer Applications</span>
              <span>Programming</span>
              <span>Software Development</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="education-content">
            <span className="education-year">Completed 2026</span>
            <h3>B.Sc. Computer Science</h3>
            <h4>
              Greenfingers College of Computer and Technology, Akluj —
              Punyashlok Ahilyadevi Holkar Solapur University
            </h4>
            <div className="education-tags">
              <span>Computer Science</span>
              <span>Web Development</span>
              <span>Programming</span>
              <span>Database</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="education-content">
            <span className="education-year">Completed</span>
            <h3>Higher Secondary Education (12th)</h3>
            <h4>Higher Secondary School</h4>
          </div>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <i className="fas fa-school"></i>
          </div>
          <div className="education-content">
            <span className="education-year">Completed</span>
            <h3>Secondary School Certificate (10th)</h3>
            <h4>Secondary Education</h4>
          </div>
        </div>
      </div>

      <div className="education-achievements">
        <h3 className="achievements-title">Achievements & Milestones</h3>
        <div className="achievements-grid">
          {achievements.map((item) => (
            <div className="achievement-card" key={item.title}>
              <div>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;