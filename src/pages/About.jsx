import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import Hero from '../components/Hero';
import AnimatedCard from '../components/AnimatedCard';

const About = () => {
  const achievements = [
    { year: '2015', title: 'FitElite Founded', description: 'Started with a vision to revolutionize fitness' },
    { year: '2017', title: '1st Expansion', description: 'Opened 5 new locations across the country' },
    { year: '2019', title: 'Award Winner', description: 'Named Best Fitness Facility of the Year' },
    { year: '2021', title: 'Digital Launch', description: 'Introduced online coaching and virtual classes' },
    { year: '2023', title: '50K Members', description: 'Reached milestone of 50,000 active members' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded to 15 countries worldwide' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower individuals to achieve their fitness goals through expert guidance, cutting-edge facilities, and community support.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Build a supportive environment where members motivate each other and celebrate collective success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintain the highest standards in training, facilities, and customer service.',
    },
    {
      icon: CheckCircle,
      title: 'Innovation',
      description: 'Continuously evolve our programs and technology to provide the best fitness experience.',
    },
  ];

  const facilities = [
    'State-of-the-art cardio equipment',
    'Olympic strength training area',
    'Functional fitness zone',
    'Olympic-size swimming pool',
    'Yoga and meditation studios',
    'Sauna and steam rooms',
    'Recovery and massage therapy',
    'Nutrition consultation center',
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <Hero
        title="About FitElite"
        subtitle="Our Story"
        description="A decade of excellence in fitness. Discover how we've transformed lives and built a community of champions."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
        showCTA={false}
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-tea_green-500 font-semibold text-lg mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl font-bold font-poppins gradient-text mb-6">
                Transforming Lives Through Fitness
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                FitElite was founded with a simple belief: everyone deserves access to world-class fitness facilities and expert guidance. Over the past decade, we've grown from a single facility to a global fitness empire, helping over 50,000 members achieve their fitness goals.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our commitment to excellence, innovation, and community has made us the preferred choice for fitness enthusiasts at all levels.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="About"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-transparent to-tea_green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-poppins gradient-text">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <AnimatedCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  gradient="from-tea_green-500 to-papaya_whip-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold font-poppins gradient-text text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-8 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileInView={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-tea_green-500 to-papaya_whip-500 flex items-center justify-center font-bold text-black"
                  >
                    {idx + 1}
                  </motion.div>
                  {idx < achievements.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-tea_green-500 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="glass p-6 rounded-2xl flex-grow">
                  <p className="text-tea_green-500 font-bold text-lg">
                    {achievement.year}
                  </p>
                  <h3 className="text-2xl font-bold font-poppins mt-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-b from-transparent to-papaya_whip-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-poppins gradient-text mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the best in fitness technology and amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="glass p-6 rounded-xl flex items-center gap-4 group cursor-pointer hover:bg-tea_green-500/10"
              >
                <CheckCircle size={28} className="text-tea_green-500 flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-tea_green-500 transition-colors">
                  {facility}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years of Excellence' },
              { number: '50K+', label: 'Active Members' },
              { number: '500+', label: 'Expert Trainers' },
              { number: '15', label: 'Global Locations' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center glass p-8 rounded-2xl"
              >
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-3">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;