import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Droplet, Filter, CheckCircle2, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Droplet,
    title: "1. Purification",
    description: "Water from our natural aquifers goes through advanced 7-stage filtration and UV sterilization."
  },
  {
    icon: Filter,
    title: "2. Packeting",
    description: "Hygienic filling and sealing of sachets in a sterile environment to lock in purity."
  },
  {
    icon: Package,
    title: "3. Packaging",
    description: "Sachets are carefully bundled into packs of 20, undergoing a final structural check."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Every bundle is inspected before distribution. Only PPP-verified water leaves our factory."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Animated wave background - conceptual via CSS gradients */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/40 via-brand-dark to-brand-dark" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-2">Our Method</h2>
            <h3 className="text-4xl font-serif font-bold mb-4">The PPP Process</h3>
            <p className="text-gray-400">Purification. Packeting. Packaging. <br/>This is the gold standard that makes Ramzo Spring a Top 20 brand in Sierra Leone.</p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-800 z-0 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-brand-dark via-brand-accent to-brand-dark opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.2} direction="up" className="relative z-10">
                <div className="flex flex-col items-center text-center group">
                  
                  {/* Icon Circle */}
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-brand-accent/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <div className="relative w-20 h-20 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-accent/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-all duration-500 group-hover:bg-brand-accent">
                      <step.icon className="w-8 h-8 text-brand-accent group-hover:text-brand-dark transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};