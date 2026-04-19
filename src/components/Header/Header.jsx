import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Header.module.scss';

const WhatsAppIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
);
import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:+919415158402">
                <Phone size={14} /> +91-94151-58402
              </a>
              <a href="mailto:deepakgkiran@gmail.com">
                <Mail size={14} /> deepakgkiran@gmail.com
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.youtube.com/@radhikagmobilegorakhpur" target="_blank"><Facebook size={14} /></a>
              <a href="https://www.youtube.com/@radhikagmobilegorakhpur" target="_blank"><Instagram size={14} /></a>
              <a href="https://www.youtube.com/@radhikagmobilegorakhpur" target="_blank"><Twitter size={14} /></a>
              <a href="https://chat.whatsapp.com/GE6EnByjuon1iaapPO51L7?mode=ems_copy_t" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <img src={logo} alt="Radhika Mobile Institute" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <span>Radhika Mobile Training Institute</span>
            </div>

            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
              <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              <li className={styles.mobileCTA}>
                <a href="#enroll" className="btn-primary">Enroll Now</a>
              </li>
            </ul>

            <button 
              className={styles.menuToggle} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
