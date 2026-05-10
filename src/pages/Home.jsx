// src/pages/Home.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Dumbbell,
  TrendingUp,
  Heart,
  Zap,
  Award,
} from 'lucide-react';
import Hero from '../components/Hero';
import StatCounter from '../components/StatCounter';
import AnimatedCard from '../components/AnimatedCard';
import TestimonialSlider from '../components/TestimonialSlider';
import PricingCard from '../components/PricingCard';
import GradientButton from '../components/GradientButton';

const Home = () => {
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const servicesRef = useRef(null);
  const pricingRef = useRef(null);

  const calculateBMI = () => {
    if (!bmiHeight || !bmiWeight) return;
    const height = parseFloat(bmiHeight) / 100;
    const weight = parseFloat(bmiWeight);
    const bmi = (weight / (height * height)).toFixed(1);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal Weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setBmiResult({ bmi, category });
  };

  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your fitness goals',
      icon: Users,
      gradient: 'from-tea_green-500 to-beige-500',
    },
    {
      title: 'Cardio Equipment',
      description: 'State-of-the-art cardio machines and zones',
      icon: Zap,
      gradient: 'from-papaya_whip-500 to-light_bronze-500',
    },
    {
      title: 'Strength Training',
      description: 'Complete weight training facility with expert guidance',
      icon: Dumbbell,
      gradient: 'from-light_bronze-500 to-cornsilk-500',
    },
    {
      title: 'Nutrition Plans',
      description: 'Customized nutrition coaching for optimal results',
      icon: Heart,
      gradient: 'from-tea_green-400 to-papaya_whip-400',
    },
  ];

  const stats = [
    { value: 15000, label: 'Active Members', icon: Users, suffix: '+' },
    { value: 250, label: 'Expert Trainers', icon: Award, suffix: '+' },
    { value: 5000, label: 'Equipment Units', icon: Dumbbell, suffix: '+' },
    { value: 98, label: 'Success Rate', icon: TrendingUp, suffix: '%' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      text: 'FitElite transformed my life completely. The trainers are incredibly knowledgeable and supportive. I achieved my fitness goals faster than I ever thought possible!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Bodybuilder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      text: 'The facilities are world-class and the equipment is top-notch. I\'ve been a member for 3 years and I keep coming back because of the quality and community.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Marathon Runner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      text: 'The nutrition program combined with the training sessions helped me prepare for my first marathon. FitElite is the complete fitness solution!',
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for beginners',
      features: [
        'Gym access',
        'Basic equipment',
        'Community access',
        '2 classes/month',
      ],
    },
    {
      name: 'Pro',
      price: 59,
      description: 'Most popular choice',
      isPopular: true,
      features: [
        'Unlimited gym access',
        'All equipment',
        'Unlimited classes',
        'Personal trainer (2x/month)',
        'Nutrition consultation',
        'Progress tracking',
      ],
    },
    {
      name: 'Elite',
      price: 99,
      description: 'Ultimate experience',
      features: [
        'Unlimited everything',
        'Dedicated personal trainer',
        'Nutrition planning',
        'Recovery services',
        'Priority booking',
        'Private sessions',
      ],
    },
  ];

  const trainers = [
    {
      name: 'Coach Marcus',
      specialty: 'Strength & Conditioning',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      certifications: ['NASM', 'CSCS', 'FMS Level 2'],
    },
    {
      name: 'Coach Jessica',
      specialty: 'HIIT & Cardio',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
      certifications: ['ACE', 'Spin Instructor', 'CrossFit'],
    },
    {
      name: 'Coach David',
      specialty: 'Powerlifting',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      certifications: ['IPF', 'USPA', 'Nutrition'],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Hero
        title="Unleash Your Inner Strength"
        subtitle="Welcome to FitElite"
        description="Transform your fitness journey with world-class facilities, expert trainers, and a supportive community. Your success is our mission."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
        showCTA={true}
        scrollTo={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-tea_green-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl sm:text-5xl font-bold font-poppins text-center mb-16 gradient-text"
          >
            By The Numbers
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  suffix={stat.suffix}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-tea_green-500 font-semibold text-lg mb-4">
              Our Services
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive fitness solutions designed for all levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <AnimatedCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradient={service.gradient}
                  hoverScale={1.08}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-papaya_whip-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-tea_green-500 font-semibold text-lg mb-4">
              Expert Guidance
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text">
              Meet Our Elite Trainers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <AnimatedCard
                  image={trainer.image}
                  title={trainer.name}
                  description={trainer.specialty}
                  gradient="from-light_bronze-500 to-papaya_whip-500"
                >
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 text-xs bg-tea_green-500/20 text-tea_green-300 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-10 sm:p-16 rounded-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins gradient-text mb-8 text-center">
              Calculate Your BMI
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(e.target.value)}
                  placeholder="170"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(e.target.value)}
                  placeholder="75"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-tea_green-500/30 focus:border-tea_green-500 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <GradientButton
              onClick={calculateBMI}
              size="lg"
              className="w-full mb-8"
            >
              Calculate BMI
            </GradientButton>

            {bmiResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-tea_green-500/20 to-papaya_whip-500/20 text-center"
              >
                <p className="text-gray-400 mb-2">Your BMI</p>
                <p className="text-5xl font-bold gradient-text mb-4">
                  {bmiResult.bmi}
                </p>
                <p className="text-2xl font-semibold text-tea_green-500">
                  {bmiResult.category}
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  Consult our trainers for a personalized fitness plan
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-light_bronze-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-tea_green-500 font-semibold text-lg mb-4">
              Success Stories
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text">
              What Our Members Say
            </h2>
          </motion.div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-tea_green-500 font-semibold text-lg mb-4">
              Membership Plans
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              Flexible pricing for every fitness level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <PricingCard
                  {...plan}
                  onCTA={() => alert(`Selected ${plan.name} plan`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tea_green-500/10 to-papaya_whip-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins gradient-text mb-6">
              Ready to Transform?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of members who have already started their fitness journey with FitElite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton size="lg">
                Start Your Free Trial
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Book a Tour
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;