import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Stat } from '../../types';
import { motion } from 'framer-motion';

const stats: Stat[] = [
  { label: 'Ranking in SL', value: 'Top', suffix: ' 20' },
  { label: 'Bundles Produced', value: '10', suffix: 'k+' },
  { label: 'Daily Production', value: '100', suffix: 'k L' },
  { label: 'Quality Process', value: 'P', suffix: 'PP' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/50 -skew-x-12 translate-x-1/4 opacity-50 pointer-events-none" />
      
      {/* Floating abstract shape */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              {/* Rotating Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/20 to-brand-primary/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1888&auto=format&fit=crop" 
                    alt="Water purification factory" 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs hidden md:block border border-white/50"
              >
                <div className="w-1 h-full absolute left-0 top-0 bg-brand-accent rounded-l-xl"></div>
                <p className="text-brand-primary font-serif italic text-lg pl-2">"Reaching the top with grace."</p>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <h2 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-accent"></span>
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
                Ramzo Spring Company
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Ramzo Spring is a premier water manufacturing and supply company based in Freetown, Sierra Leone. Recognized as one of the <strong>Top 20</strong> water brands in the country, we are dedicated to setting the standard for purity.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We specialize exclusively in high-quality pouched water. Every bundle we sell has gone through our signature <strong>PPP process (Purification, Packeting, and Packaging)</strong>. Our Lion logo symbolizes the strength of our commitment to hygiene and quality.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left group cursor-default">
                    <div className="text-3xl font-bold text-brand-primary mb-1 group-hover:scale-110 group-hover:text-brand-accent transition-all duration-300 inline-block">
                      {stat.value}<span className="text-brand-accent text-xl group-hover:text-brand-primary">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};