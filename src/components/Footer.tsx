import React from 'react';
import { Star, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    'About Us',
    'Collections',
    'Size Guide',
    'Care Instructions',
    'Returns & Exchanges',
    'Contact',
  ];

  const instagramPosts = [
    'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1454169/pexels-photo-1454169.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1454170/pexels-photo-1454170.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1454176/pexels-photo-1454176.jpeg?auto=compress&cs=tinysrgb&w=150',
  ];

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-accent-500 animate-pulse" />
              <span className="font-serif text-2xl font-bold">Midnight Aurora</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Celestial elegance crafted for timeless beauty. Each piece tells a story of wonder 
              and infinite possibility.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-accent-500 hover:text-accent-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-accent-500">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-accent-500">Contact Us</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-500" />
                <span>hello@midnightaurora.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-500" />
                <span>123 Celestial Avenue<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-accent-500">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post, index) => (
                <a
                  key={index}
                  href="#"
                  className="group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Midnight Aurora Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;