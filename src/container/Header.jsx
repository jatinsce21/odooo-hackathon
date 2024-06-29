import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../Assets/image_sports.jpg";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Find your sports</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Discover the sports places
        </p>
        <button type="button" className="custom__button" onclick={handleLogin}>
          Sign Up
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
