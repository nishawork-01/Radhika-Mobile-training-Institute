import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './StatsCounters.module.scss';
import { Users, BookOpen, Award, Briefcase } from 'lucide-react';

const Counter = ({ end, duration = 2.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

const StatsCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { id: 1, title: 'Years Experience', value: 10, suffix: '+', icon: <Briefcase /> },
    { id: 2, title: 'Students Trained', value: 5000, suffix: '+', icon: <Users /> },
    { id: 3, title: 'Courses Provided', value: 15, suffix: '+', icon: <BookOpen /> },
    { id: 4, title: 'Certified Staff', value: 20, suffix: '+', icon: <Award /> },
  ];

  return (
    <section className={styles.statsSection} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <h3>
                {inView ? <Counter end={stat.value} /> : 0}
                {stat.suffix}
              </h3>
              <p>{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounters;
