// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

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
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
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
    <footer className="bg-gradient-to-b from-black to-tea_green-100/5 border-t border-tea_green-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={item} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tea_green-500 to-papaya_whip-500 flex items-center justify-center">
                <span className="text-black font-bold">F</span>
              </div>
              <span className="gradient-text font-poppins font-bold text-xl">FitElite</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your body, elevate your mind, achieve your dreams.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg glass hover:bg-tea_green-500/20"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-tea_green-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div key={idx} variants={item}>
              <h4 className="font-bold font-poppins mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-tea_green-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="font-bold font-poppins mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-tea_green-500" />
                <span>123 Fitness Ave, Gym City</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-tea_green-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-tea_green-500" />
                <span>info@fitelite.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-tea_green-500/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} FitElite. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-tea_green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-tea_green-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-tea_green-500 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;