import React from "react";
import "./Footer.css";
import profile from "../data/profile";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>
            {profile.firstName}
            <span>.</span>
          </h2>

          <p>
            Student and aspiring full-stack developer passionate about
            building modern web applications and learning new technologies.
          </p>

          <div className="social-links">
            <a href={profile.social.github} target="_blank" rel="noreferrer">
              GH
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
              in
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer">
              IG
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <button onClick={() => scrollToSection("services")}>
            Website Development
          </button>
          <button onClick={() => scrollToSection("services")}>
            React Development
          </button>
          <button onClick={() => scrollToSection("services")}>
            Python Development
          </button>
          <button onClick={() => scrollToSection("services")}>
            Dashboard Development
          </button>
          <button onClick={() => scrollToSection("services")}>
            API Development
          </button>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📧 {profile.email}</p>
          <p>
            📍 {profile.location.city}, {profile.location.state}
          </p>
          <p>🇮🇳 {profile.location.country}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;