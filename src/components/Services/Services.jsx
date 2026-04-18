import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Award, Home, Video, MessageCircle } from 'lucide-react';
import styles from './Services.module.scss';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Digital Classrooms",
      description: "Smart teaching with digital projectors and high-quality course material for better visualization."
    },
    {
      icon: <Cpu size={32} />,
      title: "Live Practical Training",
      description: "Hands-on experience on live boards and real customer devices to build real-world confidence."
    },
    {
      icon: <Award size={32} />,
      title: "ISO Certification",
      description: "Professional certification awarded after successful completion of the course and assessment."
    },
    {
      icon: <Home size={32} />,
      title: "Hostel Facility",
      description: "Safe and affordable accommodation for outstation students coming from different cities."
    },
    {
      icon: <Video size={32} />,
      title: "Zoom Support",
      description: "Special online support for students to clear doubts even after finishing the course."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "WhatsApp Group",
      description: "Active community of technicians and students for lifelong technical support and solutions."
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className="section-title">
          <h2>Our Specialized Services</h2>
          <p>We provide a complete ecosystem for technical education and professional growth.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconBox}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
