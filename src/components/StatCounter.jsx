import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatCounter = ({ value, label, icon: Icon, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / 50;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="flex justify-center mb-3">
        {Icon && <Icon size={40} className="text-tea_green-500" />}
      </div>
      <motion.h3 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-2">
        {prefix}{count}{suffix}
      </motion.h3>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
};

export default StatCounter;