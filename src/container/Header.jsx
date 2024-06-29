import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [headerData, setHeaderData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/header");
      if (!response.ok) {
        throw new Error("Failed to fetch header data");
      }
      const data = await response.json();
      setHeaderData(data);
    } catch (error) {
      console.error("Error fetching header data:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to initiate signup");
      }
      const data = await response.json();
      navigate(data.signupUrl);
    } catch (error) {
      console.error("Error initiating signup:", error);
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">{headerData.title}</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {headerData.description}
        </p>
        <button type="button" className="custom__button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={headerData.imageUrl} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
