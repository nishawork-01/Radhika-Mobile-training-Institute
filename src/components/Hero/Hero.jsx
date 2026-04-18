import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import heroBg from '../../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Learn Mobile Repairing <br /> <span>Build Your Career</span>
          </motion.h1>
          
          <div className={styles.expBadge}>
            <strong>18++</strong> Years of Professional Experience
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Radhika Mobile Training Institute and become an expert technician. 
            Gorakhpur's most advanced mobile repairing lab with practical training.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#enroll" className="btn-primary">Enroll Now</a>
            <a href="#about" className={styles.btnSecondary}>Learn More</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
