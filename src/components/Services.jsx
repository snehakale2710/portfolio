import React from "react";
import "./Services.css";

const services = [
  ["🌐", "Website Development", "Modern and responsive websites."],
  ["💻", "Web Application Development", "Interactive applications using React."],
  ["📊", "Dashboard Development", "Data-driven dashboards and reports."],
  ["⚛️", "React Development", "Reusable and scalable React applications."],
  ["🐍", "Python Development", "Python applications and automation."],
  ["🔧", "Backend Development", "Server-side applications and APIs."],
  ["🔗", "API Development", "REST API development and integration."],
  ["🏢", "ERP Development", "Business and management applications."],
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <span>Services</span>
       
        <p>Development services and solutions I can work on.</p>
      </div>

      <div className="services-grid">
        {services.map(([icon, title, description]) => (
          <div className="service-card" key={title}>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;