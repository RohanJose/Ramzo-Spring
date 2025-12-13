import React from 'react';
import { Droplets, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="w-6 h-6 text-brand-accent" />
              <span className="text-xl font-serif font-bold">Ramzo Spring</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ramzo Spring Company. We make and supply the best drinking water. Reaching the top with grace.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ramzo_spring" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-accent transition-colors">Products</a></li>
              <li><a href="#process" className="hover:text-brand-accent transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:justify-self-end">
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Certifications</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ramzo Spring Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};