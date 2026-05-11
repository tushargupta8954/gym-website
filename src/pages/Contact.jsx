// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import Hero from '../components/Hero';
import GradientButton from '../components/GradientButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Fitness Avenue, Gym City, GC 12345',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@fitelite.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 6AM-10PM | Sat-Sun: 8AM-8PM',
    },
  ];

  const businessHours = [
    { day: 'Monday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
  ];

  const faqs = [
    {
      question: 'What are your membership options?',
      answer: 'We offer three membership plans: Basic ($29/month), Pro ($59/month), and Elite ($99/month). Each comes with different benefits and access levels.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 7-day free trial for new members. No credit card required. Just fill out a form and start exploring our facilities.',
    },
    {
      question: 'Are personal trainers available?',
      answer: 'Absolutely! All our trainers are certified professionals. Personal training sessions are available as add-ons or included in the Elite membership.',
    },
    {
      question: 'What facilities do you have?',
      answer: 'Our gym features state-of-the-art cardio equipment, free weights, strength machines, swimming pool, yoga studio, sauna, and more.',
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year. No cancellation fees apply.',
    },
    {
      question: 'Do you offer nutrition coaching?',
      answer: 'Yes, nutrition coaching is available through our certified nutritionists. It\'s included in the Pro and Elite plans.',
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <Hero
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have questions? We'd love to hear from you. Reach out to our team and start your fitness journey today."
        showCTA={false}
      />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl text-center group hover:bg-tea_green-500/10"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-tea_green-500/20 group-hover:bg-tea_green-500/30 transition-colors">
                    <info.icon size={28} className="text-tea_green-500" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <p className="text-gray-400 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-transparent to-tea_green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold font-poppins mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Membership Inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-tea_green-500 to-papaya_whip-500 text-black font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-tea_green-500/30"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-tea_green-500/20 border border-tea_green-500/50 rounded-lg text-tea_green-300"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-96 sm:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2631476494507!2d-74.00012!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMDEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Business Hours */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold font-poppins mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex justify-between items-center pb-3 border-b border-tea_green-500/10 last:border-b-0"
                    >
                      <span className="font-semibold">{schedule.day}</span>
                      <span className="text-gray-400">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold font-poppins mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 rounded-lg bg-tea_green-500/20 hover:bg-tea_green-500/30 transition-colors flex items-center justify-center"
                      aria-label={social.label}
                    >
                      <social.icon size={24} className="text-tea_green-500" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-poppins gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Find answers to common questions about our gym and services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-tea_green-500/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} className="text-tea_green-500" />
                  </motion.div>
                </motion.button>

                {openFAQ === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-tea_green-500/20 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-tea_green-500/10 to-papaya_whip-500/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold font-poppins gradient-text mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get exclusive fitness tips, workout plans, and member-only offers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
              />
              <GradientButton onClick={() => setNewsletterEmail('')}>
                Subscribe
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;