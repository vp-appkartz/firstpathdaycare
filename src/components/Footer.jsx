import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <Link to="/">
              <img src="/media/FPDC-PNG-1024x412.png" alt="First Path Daycare Logo" style={{ height: '70px', marginBottom: '20px', objectFit: 'contain' }} />
            </Link>
            <p className="footer-desc">
              Providing a nurturing, play-based learning environment for children from 12 months to school age in Calmar, AB.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title" style={{ color: '#008ab0' }}>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h3 className="footer-title" style={{ color: '#ed859b' }}>Our Programs</h3>
            <ul className="footer-links">
              <li><Link to="/programs/baby-care">Baby Care (12-18m)</Link></li>
              <li><Link to="/programs/toddler-care">Toddler Care (18m-3y)</Link></li>
              <li><Link to="/programs/pre-school">Pre-School (3-4.5y)</Link></li>
              <li><Link to="/programs/after-school">After School Care (OSC)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title" style={{ color: '#00ae9b' }}>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Calmar, Alberta</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:587-501-3178">587-501-3178</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info.firstpathdaycare@gmail.com">info.firstpathdaycare@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} First Path Daycare. All Rights Reserved.</p>
          <p>Site designed by: <a href="https://appkartz.com" target="_blank" rel="noreferrer">Appkartz.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
