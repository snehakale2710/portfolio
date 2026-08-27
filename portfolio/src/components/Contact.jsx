import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Thank you! Your message has been submitted.");

    e.target.reset();
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

          <p>
            I'm always interested in discussing new projects, opportunities
            and ideas.
          </p>

          <div className="contact-item">
            <span>📧</span>

            <div>
              <small>Email</small>
              <p>snehakale@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📱</span>

            <div>
              <small>Phone</small>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="contact-item">
            <span>💼</span>

            <div>
              <small>LinkedIn</small>
              <p>linkedin.com/in/your-profile</p>
            </div>
          </div>

          <div className="contact-item">
            <span>🐙</span>

            <div>
              <small>GitHub</small>
              <p>github.com/snehakale2710</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>

          <button type="submit">
            Send Message 🚀
          </button>

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;