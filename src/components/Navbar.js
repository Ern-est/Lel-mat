import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import lelmatLogo from '../assets/lelmat.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/">
        <img src={lelmatLogo} alt="Lelmat Logo" />
        </Link>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
