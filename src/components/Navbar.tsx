import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Heart, ShoppingBag, Menu, X, Star } from 'lucide-react';
import { cartState, wishlistState, cartTotalSelector } from '../recoil/atoms';
import CartDropdown from './CartDropdown';

const Navbar: React.FC = () => {
  const [cart] = useRecoilState(cartState);
  const [wishlist] = useRecoilState(wishlistState);
  const cartTotal = useRecoilValue(cartTotalSelector);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Collections', 'About', 'Contact'];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-accent-500 animate-pulse" />
            <span className="font-serif text-2xl font-bold text-primary-500">
              Midnight Aurora
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-primary-400 hover:text-secondary-500 transition-colors duration-200 font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-primary-400 hover:text-secondary-500 transition-colors">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-primary-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {wishlist.length}
                </span>
              )}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-primary-400 hover:text-secondary-500 transition-colors"
              >
                <ShoppingBag className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent-500 text-primary-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cart.length}
                  </span>
                )}
              </button>
              {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-primary-400 hover:text-secondary-500"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-primary-400 hover:text-secondary-500 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;