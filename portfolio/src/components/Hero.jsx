import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Animated Background */}
      <div className="hero-bg">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
      </div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Sneha <span>Kale</span>
          </h1>

          <h2>
            B.Sc. Computer Science Student
          </h2>

          <div className="role">
            Frontend Developer
          </div>

          <p className="hero-description">
            I am a passionate Computer Science student who loves
            creating modern, responsive and user-friendly web
            applications using React, JavaScript, Python and
            other modern technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View Projects
              <span>→</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn secondary-btn"
            >
              Download Resume
              <span>↓</span>
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image-container">

          <div className="image-glow"></div>

          <div className="profile-ring">

            <div className="profile-image">

              <img
                src="/profile.jpg"
                alt="Sneha Kale"
              />

            </div>

          </div>

          {/* Floating Cards */}

          <div className="floating-card card-one">
            ⚛️ React
          </div>

          <div className="floating-card card-two">
            🐍 Python
          </div>

          <div className="floating-card card-three">
            💻 Developer
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">

        <span></span>

        <p>Scroll Down</p>

      </div>

    </section>
  );
}

export default Hero;