
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_SECTIONS = ["home", "about", "skills", "projects", "resume", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Sneha<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {NAV_SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={activeSection === id ? "nav-active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
