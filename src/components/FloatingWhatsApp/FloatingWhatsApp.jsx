import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.scss';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://chat.whatsapp.com/GE6EnByjuon1iaapPO51L7?mode=ems_copy_t"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatButton}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
