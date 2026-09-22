import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_SECTIONS = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      for (let i = 0; i < NAV_SECTIONS.length; i++) {
        const id = NAV_SECTIONS[i];
        const section = document.getElementById(id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [];

  for (let i = 0; i < NAV_SECTIONS.length; i++) {
    const id = NAV_SECTIONS[i];
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    const isActive = activeSection === id;

    navLinks.push(
      <a
        key={id}
        href={"#" + id}
        onClick={function () {
          setActiveSection(id);
          closeMenu();
        }}
        className={isActive ? "nav-active" : ""}
      >
        {label}
      </a>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={function () {
            setActiveSection("home");
            closeMenu();
          }}
        >
          Sneha<span>.</span>
        </a>

        <div className={"nav-links " + (menuOpen ? "active" : "")}>
          {navLinks}
        </div>

        <button
          className="menu-btn"
          onClick={function () {
            setMenuOpen(!menuOpen);
          }}
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