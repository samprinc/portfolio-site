import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">
        Feel free to reach out to me for projects, collaborations, or just to say hi!
      </p>

      <div className="contact-links">
        <a href="https://wa.me/254794939181" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaWhatsapp className="contact-icon" /> WhatsApp
        </a>
        <a href="https://www.instagram.com/sam_princ1/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaInstagram className="contact-icon" /> Instagram
        </a>
        <a href="https://www.facebook.com/sammy.bett.140426" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaFacebook className="contact-icon" /> Facebook
        </a>
      </div>

      <div className="contact-extra">
        <p><FaEnvelope /> Email: <a href="mailto:samprinc1122@gmail.com" style={{color:'#ffcc00'}}>samprinc1122@gmail.com</a></p>
        <p><FaMapMarkerAlt /> Location: Kenya</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
