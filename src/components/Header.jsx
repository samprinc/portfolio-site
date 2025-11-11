// src/components/Header.js
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  // Detect scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ["hero", "about", "projects", "skills", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 80;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">Sammy Bett</h1>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <a
          href="#hero"
          onClick={closeMenu}
          className={activeLink === "hero" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={closeMenu}
          className={activeLink === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={closeMenu}
          className={activeLink === "projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#skills"
          onClick={closeMenu}
          className={activeLink === "skills" ? "active" : ""}
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className={activeLink === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
