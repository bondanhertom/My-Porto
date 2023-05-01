import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-logo" href="/">My Portfolio</a>
            </div>
            <ul className="navbar-menu">
                <li className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}>
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className={`navbar-item ${location.pathname === "/about" ? "active" : ""}`}>
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li className={`navbar-item ${location.pathname === "/portofolio" ? "active" : ""}`}>
                    <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
