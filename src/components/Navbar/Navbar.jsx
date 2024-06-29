import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <h1>Sportsclub99</h1>
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans" onClick={toggleDropdown}>
          Sports {dropdownOpen ? <>&#9650;</> : <>&#9660;</>}
          {dropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/football" onClick={closeDropdown}>
                  Football
                </Link>
              </li>
              <li>
                <Link to="/cricket" onClick={closeDropdown}>
                  Cricket
                </Link>
              </li>
              <li>
                <Link to="/volleyball" onClick={closeDropdown}>
                  Volleyball
                </Link>
              </li>
              <li>
                <Link to="/pickleball" onClick={closeDropdown}>
                  Pickleball
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="p__opensans">
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className="p__opensans">
          <Link to="/booking">Booking</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">About us</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <RiMenu3Line
          color="#fff"
          fontSize={27}
          className="overlay__start"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiCloseLine
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="/" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => setToggleMenu(false)}>
                  Football
                </a>
              </li>
              <li>
                <a href="/menu" onClick={() => setToggleMenu(false)}>
                  Cricket
                </a>
              </li>
              <li>
                <a href="/menu" onClick={() => setToggleMenu(false)}>
                  Volleyball
                </a>
              </li>
              <li>
                <a href="/menu" onClick={() => setToggleMenu(false)}>
                  Pickleball
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
