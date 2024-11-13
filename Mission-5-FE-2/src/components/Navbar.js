import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  // Set the active tab based on the current location
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddMovie");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <div className="navbar">
      <p className="logo">Chill Movies</p>
      <div className="nav-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddMovie" ? "active" : ""}`}
            onClick={() => setActiveTab("AddMovie")}
          >
            Add movie
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
