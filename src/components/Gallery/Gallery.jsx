import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const images = [
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/3.png",
      title: "Digital Class"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/5.png",
      title: "Live Practical"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/8.png",
      title: "Hostel Facility"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/1.png",
      title: "Updated Tools"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/6.png",
      title: "Zoom Supports"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/7.png",
      title: "Night Extra Class"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/4.png",
      title: "Limited Seats"
    },
    {
      url: "https://radhikamobile.com/wp-content/uploads/2025/04/2.png",
      title: "Certificate"
    }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className="section-title">
          <h2>Our Training Gallery</h2>
          <p>A glimpse into our professional training center and experimental labs.</p>
        </div>
        
        <div className={styles.grid}>
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={img.url} alt={img.title} />
              <div className={styles.overlay}>
                <span>{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
