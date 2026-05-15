import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
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
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              <li><Link to="/terms#publishing-agreement" className="footer-link">Publishing Agreement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@sparkleafpublication.in" target="_blank" rel="noopener noreferrer" className="social-icon" title="Email Us"><Mail size={20} /></a>
              <a href="https://wa.me/918788446390" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp Us"><Phone size={20} /></a>
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
