import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-2">
        <div className="container">
          {/* Brand Logo & Name: KrishaCards */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={closeMenu}>
            <span className="fs-2">💌</span>
            <span className="brand-text">Krisha<span className="brand-purple">Cards</span></span>
          </Link>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Single-Aligned Nav Links (Exactly 6 pages) */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="storeNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} onClick={closeMenu} end>
                  <FaHome className="me-1" /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wedding" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Wedding Invitations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/birthday" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Birthday Invitations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Other Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customize" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Card Details / Customization
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                  Contact / Order
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
