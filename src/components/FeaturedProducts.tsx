import React from 'react';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import { filteredProductsSelector } from '../recoil/atoms';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const products = useRecoilValue(filteredProductsSelector);

  return (
    <section id="products" className="py-16 bg-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-primary-500 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-primary-400 max-w-2xl mx-auto">
            Handcrafted pieces that capture the essence of celestial beauty and timeless elegance
          </p>
        </motion.div>

        {products.length === 0 ? (
          <div className="text-center text-primary-400 py-12">
            <p>Loading magical pieces...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;