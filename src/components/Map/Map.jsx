import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import styles from './Map.module.scss';

const Map = () => {
  return (
    <section id="location" className={styles.mapSection}>
      <div className="container">
        <div className="section-title">
          <h2>Visit Our Institute</h2>
          <p>We are located in the heart of Gorakhpur, easily accessible from all parts of the city.</p>
        </div>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.mapInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoCard}>
              <h3>Contact Details</h3>
              <div className={styles.item}>
                <MapPin size={24} className={styles.icon} />
                <div>
                  <h4>Our Address</h4>
                  <p>Radhika Mobile Gorakhpur, Vijay Chowk, Golghar, Gorakhpur, Uttar Pradesh 273001</p>
                </div>
              </div>
              
              <div className={styles.item}>
                <Phone size={24} className={styles.icon} />
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 94151-58402</p>
                </div>
              </div>
              
              <div className={styles.item}>
                <Clock size={24} className={styles.icon} />
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 11:00 AM - 09:00 PM</p>
                  <p>Sunday: Weekly Off</p>
                </div>
              </div>

              <button 
                className={`btn-primary ${styles.directionsBtn}`}
                onClick={() => window.open('https://www.google.com/maps/dir//Radhika+Mobile+Gorakhpur,+Vijay+Chowk,+Golghar,+Gorakhpur,+Uttar+Pradesh+273001/', '_blank')}
                style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
              >
                <MapPin size={18} /> Get Directions
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.mapWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className={styles.mapOverlay} 
              onClick={() => window.open('https://www.google.com/maps/dir//Radhika+Mobile+Gorakhpur,+Vijay+Chowk,+Golghar,+Gorakhpur,+Uttar+Pradesh+273001/', '_blank')}
              title="Click for Directions"
            ></div>
            <iframe 
              src="https://maps.google.com/maps?q=Radhika%20Mobile%20Gorakhpur,%20Vijay%20Chowk,%20Golghar,%20Gorakhpur,%20Uttar%20Pradesh%20273001&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Radhika Mobile Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
