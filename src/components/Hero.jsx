// src/components/Hero.js
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Sammy Bett</span></h1>
        <p className="hero-subtitle">
          I build <span>web</span>  solutions that turn ideas into reality.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
