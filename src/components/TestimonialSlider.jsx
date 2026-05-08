// src/components/TestimonialSlider.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialSlider = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const { name, role, image, text, rating } = testimonials[current];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Slides */}
      <div className="relative h-96 overflow-hidden rounded-2xl glass p-8 sm:p-12">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12"
          >
            {/* Quote */}
            <p className="text-xl sm:text-2xl text-gray-300 italic mb-6 leading-relaxed">
              "{text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-tea_green-500"
              />
              <div>
                <p className="font-bold font-poppins text-tea_green-500">{name}</p>
                <p className="text-gray-400 text-sm">{role}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cornsilk-300 text-cornsilk-300" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          className="p-3 rounded-full glass hover:bg-tea_green-500/20"
        >
          <ChevronLeft size={24} className="text-tea_green-500" />
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? 'w-8 bg-tea_green-500'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="p-3 rounded-full glass hover:bg-tea_green-500/20"
        >
          <ChevronRight size={24} className="text-tea_green-500" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialSlider;