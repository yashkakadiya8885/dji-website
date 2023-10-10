import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { BiSearch , BiUser   } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="header">
      <div id="main-nav">
        <div className="logo-main">
          <Link>
            <img src="image/download.svg" alt="" className="image-logo" />
          </Link>
        </div>
        <div className="main-menu">
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <Link to="cameradrones" className="link">
            <p>Camera Drones</p>
          </Link>
          <Link to="handheld" className="link">
            <p>Handheld</p>
          </Link>
          <Link to="specialized" className="link">
            <p>Specialized</p>
          </Link>
          <Link to="explorr" className="link">
            <p>Explore</p>
          </Link>
          <Link to="support" className="link">
            <p>Support</p>
          </Link>
          <Link to="wheretobuy" className="link">
            <p>Where to Buy</p>
          </Link>
        </div>
      </div>
      <div className="icon-main">
        <div className="icon-1">
            <i className="icon"><BiSearch/></i>
        </div>
        <div className="icon-2">
           <Link to="signup">
           <i className="icon"><BiUser/></i>
           </Link>
        </div>
        <div className="icon-3">
            <button className="icon-button">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
