import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-content">
        <div className="app__footer-contact">
          <FaPhoneAlt size={20} className="footer-icon" />
          <span>Contact Us: +91 9999999999</span>
        </div>
        <div className="app__footer-email">
          <FaEnvelope size={20} className="footer-icon" />
          <span>Email: info@sportsclub99.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
