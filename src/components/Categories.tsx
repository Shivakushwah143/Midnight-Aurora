import React from 'react';
import { useSetRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { categoryFilterState } from '../recoil/atoms';

const categories = [
  {
    name: 'All',
    value: 'all',
    image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Rings',
    value: 'rings',
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
  },
  {
    name: 'Necklaces',
    value: 'necklaces',
    image: "https://images.unsplash.com/photo-1639729910287-21f51f32a8fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5lY2tsZXNzfGVufDB8fDB8fHww",
  },
  {
    name: 'Earrings',
    value: 'earrings',
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop",
  },
  {
    name: 'Bracelets',
    value: 'bracelets',
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJhY2VsZXRzfGVufDB8fDB8fHww",
  },
];

const Categories: React.FC = () => {
  const setCategoryFilter = useSetRecoilState(categoryFilterState);

  const handleCategoryClick = (value: string) => {
    setCategoryFilter(value);
    // Smooth scroll to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-primary-500 mb-4">
            Celestial Collections
          </h2>
          <p className="text-lg text-primary-400 max-w-2xl mx-auto">
            Discover our curated categories, each piece crafted with celestial inspiration and timeless elegance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCategoryClick(category.value)}
              className="cursor-pointer group"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-transparent group-hover:border-accent-500 transition-all duration-300 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/20 group-hover:to-secondary-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-center mt-4 font-semibold text-primary-600 group-hover:text-secondary-500 transition-colors duration-200">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;