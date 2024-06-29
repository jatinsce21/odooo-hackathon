import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus__content">
        <h1>About Us</h1>
        <p>
          Welcome to Sportsclub99, your number one source for all things sports.
          We're dedicated to giving you the very best of sports information,
          with a focus on dependability, customer service, and uniqueness.
        </p>
        <p>Founded in 2024, Sportsclub99.</p>
        <p>
          We hope you enjoy our platform as much as we enjoy offering it to you.
          If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <p>Sincerely,</p>
        <p>The Sportsclub99 Team</p>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
