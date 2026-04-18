import React from 'react';
import { motion } from 'framer-motion';
import { Users, Microscope, Headset, Wallet } from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Experienced Trainers",
      description: "Learn from industry experts with over 10 years of field experience in mobile repairing."
    },
    {
      icon: <Microscope size={32} />,
      title: "Practical Training",
      description: "Get hands-on experience on live boards and use advanced diagnostic tools in our labs."
    },
    {
      icon: <Headset size={32} />,
      title: "100% Support",
      description: "Post-training support to help you start your own business or secure a job in top service centers."
    },
    {
      icon: <Wallet size={32} />,
      title: "Affordable Fees",
      description: "Quality education at the most competitive price in Gorakhpur with flexible payment options."
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Radhika Mobile?</h2>
          <p>We don't just teach repairing; we build professional technicians ready for the industry.</p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.iconBox}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
