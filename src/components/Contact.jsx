
import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container" style={{display:"flex", alignContent:"center",justifyContent:"center"}}>
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-content">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <p><FaMapMarkerAlt /> New York, USA</p>
          <p><FaPhone /> +1 234 567 890</p>
          <p><FaEnvelope /> contact@arnoldsgym.com</p>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
