import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contactus__content">
        <h1>Contact Us</h1>
        <form className="contactus__form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
