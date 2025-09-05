import React from 'react';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { cartState, wishlistState, Product } from '../recoil/atoms';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const [wishlist, setWishlist] = useRecoilState(wishlistState);

  const isInWishlist = wishlist.some(item => item.id === product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const toggleCart = () => {
    if (isInCart) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <button
          onClick={toggleWishlist}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
            isInWishlist
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-primary-400 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-600 mb-2">{product.name}</h3>
        <p className="text-primary-400 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent-500">${product.price}</span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
              isInCart
                ? 'bg-secondary-500 text-white'
                : 'bg-primary-500 hover:bg-secondary-500 text-white'
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="text-sm font-medium">
              {isInCart ? 'Added' : 'Add to Cart'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;