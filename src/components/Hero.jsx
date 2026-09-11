import React from "react";
import "./Hero.css";
import profile from "../data/profile";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
        <span className="grid-overlay"></span>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Sneha <span>Kale</span>
          </h1>

          <h2>Building Intelligent Solutions with AI, Code & Creativity</h2>

          <div className="role">
            {profile.roles.map((role, i) => (
              <React.Fragment key={role}>
                {role}
                {i < profile.roles.length - 1 && (
                  <span className="role-divider">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="hero-description">
            I am a passionate technology professional with a strong interest
            in Artificial Intelligence, Machine Learning, Prompt Engineering,
            and modern web development. I enjoy transforming ideas into
            practical, responsive, and intelligent digital solutions.
          </p>

          <div className="internship-badge">
            <span className="status-dot"></span>
            Currently working as a {profile.title} at
            <strong> {profile.company}</strong>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
              <span>→</span>
            </a>

            <a
              href={profile.resume.path}
              download={profile.resume.downloadName}
              className="btn secondary-btn"
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-glow"></div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-ring">
            <div className="profile-image">
              <img src="/profile.jpg" alt={profile.name} />
            </div>
          </div>

          <div className="floating-card card-one">
            <span className="card-icon">🤖</span>
            AI / ML
          </div>

          <div className="floating-card card-two">
            <span className="card-icon">⚛️</span>
            React
          </div>

          <div className="floating-card card-three">
            <span className="card-icon">🐍</span>
            Python
          </div>

          <div className="floating-card card-four">
            <span className="card-icon">✨</span>
            Prompt Engineering
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Hero;
