import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import Hero from '../components/Hero';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    // Gym Interior
    {
      id: 1,
      category: 'interior',
      title: 'Main Training Hall',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    },
    {
      id: 2,
      category: 'interior',
      title: 'Cardio Zone',
      image: 'https://images.unsplash.com/photo-1552521516-0f6e5acbbcd7?w=600&q=80',
    },
    {
      id: 3,
      category: 'interior',
      title: 'Weight Area',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    },
    // Equipment
    {
      id: 4,
      category: 'equipment',
      title: 'Dumbbells Collection',
      image: 'https://images.unsplash.com/photo-1538805060514-97d3cc221e8d?w=600&q=80',
    },
    {
      id: 5,
      category: 'equipment',
      title: 'Kettlebells',
      image: 'https://images.unsplash.com/photo-1574680096145-1637f16c01b2?w=600&q=80',
    },
    {
      id: 6,
      category: 'equipment',
      title: 'Cable Machine',
      image: 'https://images.unsplash.com/photo-1584863269585-ca3fb3a63f28?w=600&q=80',
    },
    // Training Sessions
    {
      id: 7,
      category: 'training',
      title: 'Personal Training',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    },
    {
      id: 8,
      category: 'training',
      title: 'Group Class',
      image: 'https://images.unsplash.com/photo-1546519638-68711109d298?w=600&q=80',
    },
    {
      id: 9,
      category: 'training',
      title: 'Boxing Training',
      image: 'https://images.unsplash.com/photo-1549576528-b34c0ed5c3f7?w=600&q=80',
    },
    // Transformations
    {
      id: 10,
      category: 'transformations',
      title: 'Transformation Journey',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    },
    {
      id: 11,
      category: 'transformations',
      title: 'Before & After',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c006ae30?w=600&q=80',
    },
    {
      id: 12,
      category: 'transformations',
      title: 'Success Story',
      image: 'https://images.unsplash.com/photo-1488508169535-c3436abfc3d0?w=600&q=80',
    },
    // Events
    {
      id: 13,
      category: 'events',
      title: 'Fitness Challenge',
      image: 'https://images.unsplash.com/photo-1552258987-868a1c71e42f?w=600&q=80',
    },
    {
      id: 14,
      category: 'events',
      title: 'Community Event',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
    },
    {
      id: 15,
      category: 'events',
      title: 'Tournament',
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&q=80',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'interior', label: 'Gym Interior' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'training', label: 'Training Sessions' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'events', label: 'Events' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <Hero
        title="Gallery"
        subtitle="Visual Excellence"
        description="Experience our world-class facilities and vibrant community through our gallery"
        showCTA={false}
      />

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-tea_green-500 to-papaya_whip-500 text-black'
                    : 'glass hover:bg-tea_green-500/20 text-tea_green-500'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer h-72"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-tea_green-500/20 hover:bg-tea_green-500/40 transition-colors"
                      >
                        <Maximize2 size={24} className="text-tea_green-500" />
                      </motion.button>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">
                        {categories.find(c => c.id === item.category)?.label}
                      </p>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-3 rounded-full bg-tea_green-500/20 hover:bg-tea_green-500/40"
              >
                <X size={24} className="text-tea_green-500" />
              </motion.button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-tea_green-500 font-semibold">
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;