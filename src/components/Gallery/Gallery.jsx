import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
      title: "Advanced Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      title: "Microscope Repairing"
    },
    {
      url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
      title: "Motherboard Diagnostics"
    },
    {
      url: "https://images.unsplash.com/photo-1517077147496-d28235863953?auto=format&fit=crop&q=80&w=800",
      title: "Soldering Station"
    },
    {
      url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800",
      title: "Software Flashing"
    },
    {
      url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
      title: "Training Center"
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
