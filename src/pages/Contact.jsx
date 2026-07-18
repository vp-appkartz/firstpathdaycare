import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-up">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch to book a tour or ask any questions.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '0 20px 80px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-section">
            <h2 style={{ color: 'var(--text-main)', marginBottom: '30px', fontSize: '2.2rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
              Have questions about our programs, fees, or want to schedule a visit? Fill out the form or reach us directly.
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Location</h3>
                  <p>Calmar, Alberta</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:587-501-3178">587-501-3178</a></p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:info.firstpathdaycare@gmail.com">info.firstpathdaycare@gmail.com</a></p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Friday: 7:00 AM - 6:00 PM<br />Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 style={{ marginBottom: '30px', fontSize: '2.2rem', color: 'var(--primary-color)' }}>Send Us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Parent's Name *</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="587-501-3178" />
              </div>

              <div className="form-group">
                <label htmlFor="program">Interested Program</label>
                <select id="program" defaultValue="">
                  <option value="" disabled>Select a Program</option>
                  <option value="baby">Baby Care (12-18m)</option>
                  <option value="toddler">Toddler Care (18m-3y)</option>
                  <option value="preschool">Pre-School (3-4.5y)</option>
                  <option value="osc">After School Care</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" rows="5" required placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
