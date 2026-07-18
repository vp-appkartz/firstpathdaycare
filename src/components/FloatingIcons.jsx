import React from 'react';
import { Phone, Mail } from 'lucide-react';
import './FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons-container">
      <a href="tel:587-501-3178" className="social-floating-icon phone" aria-label="Call Us">
        <Phone size={20} />
      </a>
      <a href="mailto:info.firstpathdaycare@gmail.com" className="social-floating-icon mail" aria-label="Email Us">
        <Mail size={20} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-floating-icon facebook" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-floating-icon instagram" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
    </div>
  );
};

export default FloatingIcons;
