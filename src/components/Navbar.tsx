import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false); // useState hook to handle the "click" variable, setClick will be the function that changes the variable. Default value is false.
  const [button, setButton] = useState(true); // useState hook to handle the "button" variable, setButton will be the function that changes the variable. Default value is true.

  const handleClick = () => setClick(!click); //Everytime handleClick funtion is called, it will call setClick and set the variable to it's opposite value
  const closeMobileMenu = () => setClick(false); // everytime closeMobileMenu gets called it will call setClick and set the variable to false

  const showButton = () => {
    //function that will set the button to true or false, essentially not showing or showing the button based on the length of the window
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    //this will call showButton once every new render since it only has an open array
    showButton();
  }, []);

  window.addEventListener("resize", showButton); // an eventlistener that listens for a resize of window and calls showButton when there is a resize

  /*first link is just placeholder for now */
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            WSSolutionsGroup
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/appointments" /**Remember to route "/appointments" and other links in App.tsx */
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Make Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/checkrefund"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Check Your Refund
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" buttonSize=" ">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
