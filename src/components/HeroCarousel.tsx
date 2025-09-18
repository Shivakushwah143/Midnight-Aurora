import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Midnight Aurora Collection',
    subtitle: 'Celestial elegance crafted for the stars',
    image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'Discover Magic',
  },
  {
    id: 3,
    title: 'Limited Aurora Edition',
    subtitle: 'Exclusive pieces inspired by the northern lights',
    image: 'https://images.pexels.com/photos/1454170/pexels-photo-1454170.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'View Collection',
  },
  {
    id: 2,
    title: 'Handcrafted Perfection',
    subtitle: 'Every piece tells a story of timeless beauty',
    image: 'https://images.pexels.com/photos/1454169/pexels-photo-1454169.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'Shop Now',
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="relative h-full m-1 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            
            <div className="relative z-10 h-full flex items-center pt-12 pb-8 md:pt-0 md:pb-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-white space-y-4 md:space-y-6 text-center lg:text-left"
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-snug md:leading-tight">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {slides[currentSlide].subtitle}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent-500 hover:bg-accent-400 text-primary-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {slides[currentSlide].cta}
                    </motion.button>
                  </motion.div>

                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-first lg:order-last mt-8 lg:mt-0"
                  >
                    <div className="relative z-10 animate-float">
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                    <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-accent-500/30 to-secondary-500/30 rounded-2xl -z-10"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-accent-500 w-6 md:w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;