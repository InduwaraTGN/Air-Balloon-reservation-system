// src/components/header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../views/HomePage/style.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
       <div className="logo-container">
          <img src="public\balloon-logo.png" alt="SkyHigh Balloons" className="logo" />
          <h1 className="site-title">SkyHigh Balloons</h1>
        </div> 
        <div className="welcome-note">
          <span className="welcome-text"><b>Your journey to the skies begins here</b></span>
        </div>
        <div className="header-actions">
          <Link to="/login" className="auth-btn login-btn">Login</Link>
          <Link to="/register" className="auth-btn register-btn">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;