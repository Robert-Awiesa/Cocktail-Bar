// ContactHero.jsx
import React from "react";
import "./ContactHero.css";
import heroBg from "../assets/contact-hero.jpg"; // Replace with your image

function ContactHero() {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="contact-hero-overlay">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you. Whether you're planning a visit,
            booking a table, or just saying hello — we're here for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;