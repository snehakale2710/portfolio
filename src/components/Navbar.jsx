import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_SECTIONS = ["home", "about", "education", "skills", "projects", "contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    NAV_SECTIONS.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return function () {
      observer.disconnect();
    };
  }, []);

  const navLinks = [];
  for (let i = 0; i < NAV_SECTIONS.length; i++) {
    const id = NAV_SECTIONS[i];
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    const isActive = activeSection === id;
    navLinks.push(
      <a key={id} href={"#" + id} onClick={closeMenu} className={isActive ? "nav-active" : ""}>
        {label}
      </a>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Sneha<span>.</span>
        </a>

        <div className={"nav-links " + (menuOpen ? "active" : "")}>
          {navLinks}
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;