import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../../Assets/publicicon.svg";
import password_icon from "../../Assets/passwordicon.svg";
import email_icon from "../../Assets/emailicon.svg";
import Navbar from "../Navbar/Navbar";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/api/${action.toLowerCase()}`;
    const data =
      action === "Login" ? { email, password } : { name, email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      // Handle successful login/signup here (e.g., save token, redirect)
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here (e.g., show error message to user)
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            {action === "Sign Up" && (
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <button
              type="submit"
              className={action === "Sign Up" ? "submit" : "submit gray"}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
            <button
              type="submit"
              className={action === "Login" ? "submit" : "submit gray"}
              onClick={() => setAction("Login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginSignup;
