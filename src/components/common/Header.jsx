import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Header.css';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Plans', path: '/plans' },
  { name: 'Features', path: '/features' },
  { name: 'Add-ons', path: '/addons' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="header-logo">
            <img src="/sparklife.png" alt="SparkLeaf Publication" />
          </Link>

          <nav className="nav-desktop">
            {NAV_LINKS.map(link => (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.name}
              </Link>
            ))}
            <Button href="/contact?plan=gold" variant="primary" size="sm">
              Get Started
            </Button>
          </nav>

          <button 
            className="nav-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="nav-mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="nav-mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="nav-mobile-header">
                <img src="/sparklife.png" alt="SparkLeaf" style={{ height: '32px' }} />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <X size={28} />
                </button>
              </div>
              <div className="nav-mobile-links">
                {NAV_LINKS.map(link => (
                  <Link key={link.name} to={link.path} className="nav-mobile-link">
                    {link.name}
                  </Link>
                ))}
                <div style={{ marginTop: 'var(--space-6)' }}>
                  <Button href="/contact?plan=gold" fullWidth variant="primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
