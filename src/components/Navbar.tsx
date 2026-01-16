import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'INICIO', href: '/#home' },
    { name: 'QUIÉNES SOMOS', href: '/#about' },
    { name: 'SERVICIOS', href: '/#services' },
    { name: 'PROYECTOS', href: '/#projects' },
    { name: 'CONTACTO', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsOpen(false);
    if ((target === '/' || target === '/#home') && location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="/" 
          className="brand" 
          onClick={(e) => handleNavClick(e, '/')}
          style={{textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center'}}
        >
          <img src={logo} alt="Planos MiCasita" style={{height: '65px', width: 'auto'}} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="menu desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="nav-link" 
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="hamburger-container">
            <span className={`bar bartop ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar barmid ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar barbot ${isOpen ? 'active' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-content">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.href} 
                    className="mobile-link" 
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mobile-footer">
                <p>SANTA ANITA // LIMA // PERÚ</p>
                <div className="mobile-social">
                   <a href="https://wa.me/51960574693" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
