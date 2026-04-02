import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import styles from "./header.module.css";

// Icons
import {
  FaCode,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false); 

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/logo.png" alt="NovaLabs Logo" />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          About
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Blog
        </NavLink>

        {/* Services Dropdown */}
        <div className={styles.dropdown}>
          <button
            className={styles.dropdownBtn}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {servicesOpen && (
            <div className={styles.dropdownContent}>
              {/* Top */}
              <div className={styles.dropdownTop}>
                <div className={styles.dropdownItem}>
                  <FaCode size={24} />
                  <div>
                    <h4>Agile Software Delivery</h4>
                    <p>Software products and solutions</p>
                  </div>
                </div>
                <div className={styles.dropdownItem}>
                  <FaChartBar size={24} />
                  <div>
                    <h4>Data Science</h4>
                    <p>Build predictive models</p>
                  </div>
                </div>
                <div className={styles.dropdownItem}>
                  <FaCloud size={24} />
                  <div>
                    <h4>Cloud Engineering</h4>
                    <p>Offer cloud-based solutions and services</p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className={styles.dropdownBottom}>
                <div className={styles.dropdownItem}>
                  <FaShieldAlt size={24} />
                  <div>
                    <h4>Strategic Assurance</h4>
                    <p>Strategies are aligned and secure</p>
                  </div>
                </div>
                <div className={styles.dropdownItem}>
                  <FaLightbulb size={24} />
                  <div>
                    <h4>Product Design</h4>
                    <p>Design innovative products</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Program Dropdown */}
        <div className={styles.dropdown}>
          <button
            className={styles.dropdownBtn}
            onClick={() => setProgramOpen(!programOpen)}
          >
            Program {programOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {programOpen && (
            <div className={styles.dropdownContent}>
              <div className={styles.dropdownItem}>
                <div>
                  <h4>JAC</h4>
                  <p>Just a chance – empowering 100,000 people in Africa</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <NavLink
          to="/intelligence"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Intelligence
        </NavLink>
      </nav>

      {/* Contact Us Button */}
      <div className={styles.contact}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}


