import React from "react";
import "./Testimonials.css";
import SectionHeading from "./SectionHeading";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="What People Say"
        description="Feedback from projects and learning experiences."
      />

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