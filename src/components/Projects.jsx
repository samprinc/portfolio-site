// src/components/Projects.js
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Captain Media Website",
    description:
      "A media platform showcasing news, articles, and multimedia content. Features categories, search, and interactive posts.",
    techStack: ["React", "Django", "CSS", "JavaScript"],
    link: "https://www.captain001media.co.ke/",
  },
  {
    title: "Inventory System",
    description:
      "An inventory management system to track products, stock levels, and transactions efficiently.",
    techStack: ["React", "Vite", "CSS", "JavaScript"],
    link: "https://inv-simbi.vercel.app/",
  },
  {
    title: "Alumni Website",
    description:
      "An alumni platform for communication and updates. Features profiles, events, and messaging functionalities.",
    techStack: ["React", "Vite", "CSS", "JavaScript"],
    link: "https://alumni-pbbhs.vercel.app/",
  },
  {
    title: "Student Rental Platform",
    description:
      "A full-stack platform connecting university students with landlords. Features property listings, bookings, and payments.",
    techStack: ["React", "Django", "CSS", "JavaScript", "PostgreSQL"],
    link: "https://cmred.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects, skills, and contact info. Built with React and modern CSS techniques.",
    techStack: ["React", "CSS", "JavaScript", "Vite"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
