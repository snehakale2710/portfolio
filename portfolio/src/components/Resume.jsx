import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="resume-container">
        <div className="resume-content">
          <span className="resume-label">MY RESUME</span>

          <h2>Let's Build Something Amazing Together</h2>

          <p>
            I am interested in web development, software development,
            data visualization and modern technologies.
          </p>

          <div className="resume-buttons">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>

            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="resume-preview">
          <div className="resume-paper">
            <div className="resume-line big"></div>
            <div className="resume-line"></div>
            <div className="resume-line"></div>
            <div className="resume-line short"></div>

            <hr />

            <div className="resume-line"></div>
            <div className="resume-line"></div>
            <div className="resume-line short"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;