import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src="/sparklife.png" alt="SparkLeaf Publication" style={{ height: '36px' }} />
            </div>
            <p>India's premier self-publishing platform combining professional expertise with 100% author profits.</p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/plans" className="footer-link">Publishing Plans</Link></li>
              <li><Link to="/features" className="footer-link">Features</Link></li>
              <li><Link to="/addons" className="footer-link">Add-ons</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a href="#" className="social-icon"><Mail size={20} /></a>
              <a href="#" className="social-icon"><Phone size={20} /></a>
              <a href="#" className="social-icon"><MapPin size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SparkLeaf Publication. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
