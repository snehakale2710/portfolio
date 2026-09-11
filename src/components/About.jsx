import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <span>About Me</span>
        <h2>Know More About Me</h2>
        <p>A passionate student and aspiring full-stack developer.</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <h3>Hello, I'm Sneha 👋</h3>

          <p>
            I am a B.Sc. Computer Science student with a strong interest in
            web development, software development, and modern technologies.
            I enjoy creating responsive, user-friendly and visually appealing
            applications.
          </p>

          <p>
            My goal is to become a skilled full-stack developer and work on
            real-world applications that solve practical problems.
          </p>

          <p>
            I continuously improve my technical skills by building projects,
            learning new technologies and exploring modern development tools.
          </p>

          <div className="about-highlights">
            <div>
              <span>🎯</span>
              <h4>Career Objective</h4>
              <p>Become a professional full-stack developer.</p>
            </div>

            <div>
              <span>💡</span>
              <h4>What I Do</h4>
              <p>Build modern web applications and dashboards.</p>
            </div>

            <div>
              <span>🚀</span>
              <h4>My Strength</h4>
              <p>Quick learning, creativity and problem solving.</p>
            </div>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon">💻</div>

          <h3>My Professional Story</h3>

          <p>
            My journey in technology started with programming fundamentals
            and gradually expanded into web development, databases, Python,
            React and backend development.
          </p>

          <div className="about-stats">
            <div>
              <strong>3+</strong>
              <span>Years Learning</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;