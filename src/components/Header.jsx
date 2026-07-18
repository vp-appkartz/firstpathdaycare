import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu as MenuIcon, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const isInternalPage = location.pathname !== '/';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isInternalPage ? 'internal-header' : ''}`}>
      {/* Main Nav */}
      <div className="header-main">
        <div className="container header-main-content">
          <Link to="/" className="logo">
            <img src="/media/FPDC-PNG-1024x412.png" alt="First Path Daycare" />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <div className="dropdown">
              <span className={`nav-link ${location.pathname.includes('/programs') ? 'active' : ''}`} style={{ cursor: 'pointer' }}>Programs ▾</span>
              <div className="dropdown-menu">
                <Link to="/programs/baby-care" className="dropdown-item">Baby Care</Link>
                <Link to="/programs/toddler-care" className="dropdown-item">Toddler Care</Link>
                <Link to="/programs/pre-school" className="dropdown-item">Pre-School</Link>
                <Link to="/programs/after-school" className="dropdown-item">After School Care (OSC)</Link>
              </div>
            </div>
            <Link to="/menu" className={`nav-link ${isActive('/menu')}`}>Menu</Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>Gallery</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
            
            <a href="https://schools.mybrightwheel.com/sign-in" target="_blank" rel="noreferrer" className="btn btn-secondary nav-cta">
              Get Update
            </a>
          </nav>

          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={`mobile-link ${isActive('/')}`} onClick={toggleMenu}>Home</Link>
        <div className="mobile-dropdown">
          <span className="mobile-link-heading">Programs</span>
          <Link to="/programs/baby-care" className="mobile-sublink" onClick={toggleMenu}>- Baby Care</Link>
          <Link to="/programs/toddler-care" className="mobile-sublink" onClick={toggleMenu}>- Toddler Care</Link>
          <Link to="/programs/pre-school" className="mobile-sublink" onClick={toggleMenu}>- Pre-School</Link>
          <Link to="/programs/after-school" className="mobile-sublink" onClick={toggleMenu}>- After School Care (OSC)</Link>
        </div>
        <Link to="/menu" className={`mobile-link ${isActive('/menu')}`} onClick={toggleMenu}>Menu</Link>
        <Link to="/gallery" className={`mobile-link ${isActive('/gallery')}`} onClick={toggleMenu}>Gallery</Link>
        <Link to="/contact" className={`mobile-link ${isActive('/contact')}`} onClick={toggleMenu}>Contact</Link>
        <a href="https://schools.mybrightwheel.com/sign-in" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-cta" onClick={toggleMenu}>
          Get Update
        </a>
      </div>
    </header>
  );
};

export default Header;
