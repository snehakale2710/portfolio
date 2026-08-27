import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "A dedicated learner who puts effort into understanding new technologies and completing projects.",
    name: "Project Feedback",
    role: "Academic Project",
  },
  {
    text: "Creative, hardworking and interested in developing practical solutions using technology.",
    name: "Team Feedback",
    role: "Project Team",
  },
  {
    text: "Shows strong interest in web development and continuously improves technical skills.",
    name: "Mentor Feedback",
    role: "Learning Journey",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2>What People Say</h2>
        <p>Feedback from projects and learning experiences.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.name}>
            <div className="stars">★★★★★</div>

            <p>"{item.text}"</p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;