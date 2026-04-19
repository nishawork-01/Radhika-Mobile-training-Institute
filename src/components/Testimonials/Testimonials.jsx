import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.scss';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Kumar",
      location: "Gorakhpur",
      rating: 5,
      text: "The practical training here is amazing. They give you dead motherboards and teach you how to bring them alive. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Sanjay Sharma",
      location: "Bihar",
      rating: 5,
      text: "Best mobile training institute in Purvanchal. The trainers are highly experienced, and the tools are fully updated to the latest standard.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Azamgarh",
      rating: 5,
      text: "Thanks to Radhika Mobile, I successfully opened my own repairing shop. Their software flashing and OCA training is top class.",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 4,
      name: "Vikash Singh",
      location: "Deoria",
      rating: 5,
      text: "I appreciated the hostel facilities and extra night classes. The environment here is fully focused on learning and earning.",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className="section-title">
          <h2>Our Students Speak!</h2>
          <p>Hear from successful technicians trained at Radhika Mobile Training Institute.</p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.id} 
                className={styles.card}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.rating}>
                  {[...Array(t.rating)].map((_, index) => (
                    <Star key={index} fill="#ffcc00" color="#ffcc00" size={18} />
                  ))}
                </div>
                <Quote className={styles.quoteIcon} size={40} />
                <p className={styles.text}>"{t.text}"</p>
                <div className={styles.studentInfo}>
                  <img src={t.avatar} alt={t.name} className={styles.avatar} />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
