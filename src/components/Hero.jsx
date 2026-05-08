// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GradientButton from './GradientButton';

const Hero = ({
  title,
  subtitle,
  description,
  image,
  showCTA = true,
  onCTAClick,
  scrollTo,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tea_green-500/20 rounded-full blur-3xl opacity-30 animate-pulse2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-papaya_whip-500/20 rounded-full blur-3xl opacity-30 animate-pulse2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-light_bronze-500/20 rounded-full blur-3xl opacity-20 animate-pulse2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {subtitle && (
              <motion.p
                variants={item}
                className="text-tea_green-500 font-semibold text-lg"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-black font-poppins leading-tight"
            >
              <span className="gradient-text">{title}</span>
            </motion.h1>

            {description && (
              <motion.p
                variants={item}
                className="text-xl text-gray-300 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {showCTA && (
              <motion.div
                variants={item}
                className="flex flex-wrap gap-4 pt-4"
              >
                <GradientButton size="lg" onClick={onCTAClick}>
                  Start Your Journey
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  Learn More
                </GradientButton>
              </motion.div>
            )}
          </motion.div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative h-96 lg:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tea_green-500/20 to-papaya_whip-500/20 rounded-3xl blur-2xl" />
              <img
                src={image}
                alt="Hero"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {scrollTo && (
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollTo}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-tea_green-500" />
        </motion.button>
      )}
    </section>
  );
};

export default Hero;