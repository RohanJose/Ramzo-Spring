import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo_transparent.png"
              alt="Ramzo Spring Logo"
              className={`h-10 w-auto transition-transform duration-300 
                ${isScrolled ? 'scale-95' : 'scale-100'}
                group-hover:scale-105`}
            />
            {/* Glow */}
            <div className="absolute inset-0 bg-brand-accent/30 blur-xl rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <span
            className={`text-2xl font-serif font-bold tracking-tight transition-colors
              ${isScrolled ? 'text-white' : 'text-white'}`}
          >
            Ramzo Spring
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                isScrolled ? 'text-gray-300' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/447950487080"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 ${
              isScrolled
                ? 'bg-brand-accent text-brand-dark hover:bg-brand-accent/90'
                : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Message Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-dark flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-brand-accent transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/447950487080"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-3 bg-brand-accent text-brand-dark rounded-full font-bold"
            >
              Message Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
