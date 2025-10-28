import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (action) => {
    setIsMenuOpen(false);
    
    switch(action) {
      case 'home':
        navigate('/');
        break;
      case 'artist':
        navigate('/sanatci');
        break;
      case 'artworks':
        navigate('/eserler');
        break;
      case 'events':
        navigate('/etkinlikler');
        break;
      case 'contact':
        navigate('/iletisim');
        break;
      case 'blog':
        navigate('/blog');
        break;
      default:
        // Diğer menü öğeleri için scroll to section
        const element = document.getElementById(action);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        break;
    }
  };

  const menuItems = [
    { name: 'Anasayfa', href: '#', action: 'home' },
    { name: 'Sanatçı', href: '#', action: 'artist' },
    { name: 'Eserler', href: '#', action: 'artworks' },
    { name: 'Etkinlikler', href: '#', action: 'events' },
    { name: 'Blog', href: '#', action: 'blog' },
    { name: 'İletişim', href: '#', action: 'contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <img src="/assets/logo.png" alt="Remart Logo" className="logo" />
        
        <ul className={isMenuOpen ? 'active' : ''}>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.action);
                }}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
