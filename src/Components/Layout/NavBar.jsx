import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`sideMenu ${menuOpen ? "active" : ""}`}>
        <div className="close" onClick={() => setMenuOpen(false)}>
          ✖
        </div>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li>
            <button
              className="dropdownBtn"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {servicesOpen && (
              <div className="dropdownContent">
                <div className="dropdownItem">
                  <FaCode size={20} />
                  <span>Agile Software Delivery</span>
                </div>
                <div className="dropdownItem">
                  <FaChartBar size={20} />
                  <span>Data Science</span>
                </div>
                <div className="dropdownItem">
                  <FaCloud size={20} />
                  <span>Cloud Engineering</span>
                </div>
                <div className="dropdownItem">
                  <FaShieldAlt size={20} />
                  <span>Strategic Assurance</span>
                </div>
                <div className="dropdownItem">
                  <FaLightbulb size={20} />
                  <span>Product Design</span>
                </div>
              </div>
            )}
          </li>

          {/* Program Dropdown */}
          <li>
            <button
              className="dropdownBtn"
              onClick={() => setProgramOpen(!programOpen)}
            >
              Program {programOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {programOpen && (
              <div className="dropdownContent">
                <div className="dropdownItem">
                  <span>JAC – empowering 100,000 people in Africa</span>
                </div>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/intelligence" onClick={() => setMenuOpen(false)}>
              Intelligence
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="contactBtn"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
