import React,{useState} from 'react'
import './LoginSignup.css'
import user_icon from "../../Assets/publicicon.svg";
import password_icon from "../../Assets/passwordicon.svg";
import email_icon from "../../Assets/emailicon.svg";
import Navbar from '../Navbar/Navbar';

const LoginSignup = () => {
    const [action,setAction]=useState("Login");
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
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>
        </div>}
       
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </>
  );
};

export default LoginSignup;
