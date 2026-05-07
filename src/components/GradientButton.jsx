import React from 'react';
import { motion } from 'framer-motion';

const GradientButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-tea_green-500 via-light_bronze-500 to-papaya_whip-500 text-black',
    secondary: 'bg-gradient-to-r from-papaya_whip-500 to-light_bronze-500 text-black',
    outline: 'border-2 border-tea_green-500 text-tea_green-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-semibold rounded-lg font-poppins
        ${variants[variant]} ${sizes[size]}
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:shadow-tea_green-500/30
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;