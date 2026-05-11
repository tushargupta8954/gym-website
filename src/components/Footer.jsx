import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: ['Home', 'About', 'Gallery', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Personal Training', 'Group Classes', 'Nutrition Plans', 'Supplements'],
    },
    {
      title: 'Member',
      links: ['Login', 'Membership Plans', 'Schedule', 'Facilities'],
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, url: '#', label: 'LinkedIn' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-tea_green-100/5 border-t border-tea_green-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12"
        >
          {/* Brand - Takes 1 full column or 2 columns on tablet */}
          <motion.div 
            variants={item} 
            className="sm:col-span-2 lg:col-span-1 flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-tea_green-500 to-papaya_whip-500 flex items-center justify-center shadow-lg"
              >
                <span className="text-black font-bold text-xl">F</span>
              </motion.div>
              <span className="gradient-text font-poppins font-bold text-2xl">
                FitElite
              </span>
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transform your body, elevate your mind, achieve your dreams.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg glass hover:bg-tea_green-500/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-tea_green-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="flex flex-col"
            >
              <h4 className="font-bold font-poppins text-white mb-5 text-base">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-tea_green-500 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform transition-transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div 
            variants={item}
            className="flex flex-col"
          >
            <h4 className="font-bold font-poppins text-white mb-5 text-base">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 group">
                <FiMapPin 
                  size={18} 
                  className="text-tea_green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-sm leading-relaxed">
                  123 Fitness Ave, Gym City
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <FiPhone 
                  size={18} 
                  className="text-tea_green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                />
                <a 
                  href="tel:+15551234567"
                  className="text-sm hover:text-tea_green-500 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <FiMail 
                  size={18} 
                  className="text-tea_green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                />
                <a 
                  href="mailto:info@fitelite.com"
                  className="text-sm hover:text-tea_green-500 transition-colors duration-300"
                >
                  info@fitelite.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-tea_green-500/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {currentYear} FitElite. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-tea_green-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-tea_green-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-tea_green-500 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Made with love badge (optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600 text-xs">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block text-red-500"
              >
                ❤️
              </motion.span>{' '}
              by FitElite Team
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;