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
            I'm a Computer Science graduate currently pursuing my MCA, with a
            strong interest in web development and AI/ML. I enjoy turning
            ideas into responsive, functional applications and I'm actively
            looking for full-stack developer roles where I can keep learning
            and contribute from day one.
          </p>

          <div className="about-highlights">
            <div>
              <span><i className="fas fa-bullseye"></i></span>
              <h4>Career Objective</h4>
              <p>Land a full-stack developer role and grow with a team.</p>
            </div>

            <div>
              <span><i className="fas fa-lightbulb"></i></span>
              <h4>What I Do</h4>
              <p>Build web applications, dashboards, and small tools.</p>
            </div>

            <div>
              <span><i className="fas fa-rocket"></i></span>
              <h4>My Strength</h4>
              <p>Quick learning, creativity and problem solving.</p>
            </div>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <i className="fas fa-laptop-code"></i>
          </div>

          <h3>My Professional Story</h3>

          <p>
            My journey in tech started with programming fundamentals and grew
            into web development, databases, Python, React, and backend
            development — with hands-on practice through academic and
            personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;