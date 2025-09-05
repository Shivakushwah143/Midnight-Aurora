import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-6 w-6 text-accent-500" />
              <span className="text-accent-500 font-semibold uppercase tracking-wide">Our Story</span>
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-primary-500 leading-tight">
              Inspired by the stars ✨ handcrafted for timeless beauty
            </h2>
            
            <p className="text-lg text-primary-400 leading-relaxed">
              At Midnight Aurora, we believe that jewelry is more than mere adornment—it's a 
              connection to the cosmos, a celebration of the celestial dance that happens above 
              us each night. Every piece in our collection is thoughtfully designed and 
              meticulously handcrafted to capture the ethereal beauty of the aurora borealis.
            </p>
            
            <p className="text-primary-400 leading-relaxed">
              Our artisans draw inspiration from the mysterious depths of midnight skies, the 
              gentle glow of distant stars, and the mesmerizing colors that paint the heavens. 
              Each creation tells a story of wonder, elegance, and the infinite beauty that 
              surrounds us.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <Moon className="h-8 w-8 text-secondary-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary-600">Handcrafted</h4>
                <p className="text-sm text-primary-400">With celestial precision</p>
              </div>
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-secondary-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary-600">Premium Materials</h4>
                <p className="text-sm text-primary-400">Ethically sourced</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-secondary-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary-600">Timeless Design</h4>
                <p className="text-sm text-primary-400">Inspired by the cosmos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan crafting jewelry"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;