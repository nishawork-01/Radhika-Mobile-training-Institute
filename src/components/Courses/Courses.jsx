import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Courses.module.scss';
import basicImg from '../../assets/course-basic.png';
import advancedImg from '../../assets/course-advanced.png';

const Courses = () => {
  const courses = [
    {
      title: "Basic Mobile Repairing",
      description: "Learn fundamental troubleshooting, hardware replacement, and basic circuit understanding.",
      image: basicImg,
      duration: "45 Days"
    },
    {
      title: "Advanced Chip Level Repair",
      description: "Master micro-soldering, IC reballing, and complex motherboard diagnostics using advanced tools.",
      image: advancedImg,
      duration: "90 Days"
    },
    {
      title: "Smartphone Software Training",
      description: "Flashing, unlocking, dead boot repair, and FRP bypass for all major Android & iOS devices.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Fallback image
      duration: "30 Days"
    }
  ];

  return (
    <section id="courses" className={styles.courses}>
      <div className="container">
        <div className="section-title">
          <h2>Our Professional Courses</h2>
          <p>Choose the right program to kickstart your career in the mobile service industry.</p>
        </div>
        
        <div className={styles.grid}>
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageBox}>
                <img src={course.image} alt={course.title} />
                <span className={styles.duration}>{course.duration}</span>
              </div>
              <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <a href="#enroll" className={styles.link}>
                  Enroll Now <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
