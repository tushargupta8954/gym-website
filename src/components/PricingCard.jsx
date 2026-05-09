// src/components/PricingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GradientButton from './GradientButton';

const PricingCard = ({
  name,
  price,
  period = 'month',
  description,
  features = [],
  isPopular = false,
  onCTA,
}) => {
  return (
    <motion.div
      whileHover={{ y: isPopular ? -20 : -10 }}
      className={`relative rounded-2xl overflow-hidden h-full ${
        isPopular ? 'lg:scale-105' : ''
      }`}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${isPopular ? 'glass' : 'glass-dark'}`} />

      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="px-4 py-2 bg-gradient-to-r from-tea_green-500 to-papaya_whip-500 text-black font-bold rounded-full text-sm">
            Most Popular
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-poppins mb-2">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <span className="text-5xl font-bold font-poppins gradient-text">
            ${price}
          </span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <Check size={20} className="text-tea_green-500 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <GradientButton
          variant={isPopular ? 'primary' : 'outline'}
          size="lg"
          onClick={onCTA}
          className="w-full"
        >
          Get Started
        </GradientButton>
      </div>

      {/* Border Animation on Hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-tea_green-500/30 pointer-events-none" />
    </motion.div>
  );
};

export default PricingCard;