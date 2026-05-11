import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({
  icon: Icon,
  title,
  description,
  image,
  gradient = 'from-tea_green-500 to-papaya_whip-500',
  onClick,
  hoverScale = 1.05,
  children,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 glass-dark" />

      {/* Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        {/* Icon */}
        {Icon && (
          <div className={`mb-4 p-3 rounded-xl w-fit bg-gradient-to-br ${gradient} group-hover:shadow-lg group-hover:shadow-tea_green-500/30 transition-shadow duration-300`}>
            <Icon size={32} className="text-white" />
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="mb-4 h-48 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold font-poppins mb-2 group-hover:text-tea_green-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 flex-grow">
            {description}
          </p>
        )}

        {/* Children */}
        {children && <div className="mt-4">{children}</div>}

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-tea_green-500/30 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default AnimatedCard;