import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-4">
            <div className="logo-container px-8">
                <Link to="/" className="logo-text">Juliette Valverde</Link>
            </div>
        
            <nav className="nav-links">
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>   
    );
};

export default Header;