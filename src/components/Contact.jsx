import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import profile from "../data/profile";

// Replace with your own EmailJS values (free at emailjs.com)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <span>Contact Me</span>
        <h2>Let's Talk</h2>
        <p>Have a project or opportunity? Get in touch with me.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'm always interested in discussing new projects, opportunities and ideas.</p>

          <div className="contact-item">
            <span><i className="fas fa-envelope"></i></span>
            <div>
              <small>Email</small>
              <p>{profile.email}</p>
            </div>
          </div>

          <div className="contact-item">
            <span><i className="fas fa-phone"></i></span>
            <div>
              <small>Phone</small>
              <p>{profile.phone}</p>
            </div>
          </div>

          <div className="contact-item">
            <span><i className="fab fa-linkedin"></i></span>
            <div>
              <small>LinkedIn</small>
              <p>linkedin.com/in/snehakale2710</p>
            </div>
          </div>

          <div className="contact-item">
            <span><i className="fab fa-github"></i></span>
            <div>
              <small>GitHub</small>
              <p>github.com/snehakale2710</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
          </div>

          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message 🚀"}
          </button>

          {status === "success" && (
            <p className="success-message">Thank you! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="error-message">Something went wrong — please email me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;