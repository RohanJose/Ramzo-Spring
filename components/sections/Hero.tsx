import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ShieldCheck, Award, Leaf } from 'lucide-react';

// Floating Bubble Component
const Bubble = ({
  delay,
  size,
  left,
  duration,
}: {
  delay: number;
  size: number;
  left: number;
  duration: number;
}) => (
  <motion.div
    initial={{ y: '110vh', opacity: 0 }}
    animate={{ y: '-10vh', opacity: [0, 0.4, 0] }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: 'linear',
    }}
    className="absolute bg-white/10 rounded-full blur-[1px] pointer-events-none z-10"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
    }}
  />
);

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden
                 py-16 md:py-20 lg:py-24"
    >
      {/* Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/90 z-10" />
        <img
          src="background.jpg"
          alt="Deep clear water"
          className="w-full h-full object-cover object-center scale-105 scale-y-[-1]"
        />
      </motion.div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubble delay={0} size={36} left={10} duration={15} />
        <Bubble delay={2} size={20} left={25} duration={12} />
        <Bubble delay={5} size={50} left={40} duration={20} />
        <Bubble delay={1} size={28} left={70} duration={18} />
        <Bubble delay={4} size={44} left={85} duration={16} />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container mx-auto px-6 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <div className="mx-auto w-24 h-24 md:w-28 md:h-28 mb-6 relative group">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-brand-accent/30 rounded-full blur-2xl opacity-60"
            />
            <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              <img
                src="logo_transparent.png"
                alt="Ramzo Spring Logo"
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

        

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-tight">
            Ramzo Spring <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-white">
              Company
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 font-light">
            We make and supply the best pouched drinking water.
            <br />
            Certified <strong className="text-white">PPP Process</strong>:
            Purification, Packeting & Packaging.
          </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/447950487080"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-gradient-to-r from-brand-accent to-brand-primary
                         text-white rounded-full font-bold shadow-lg min-w-[190px]"
            >
              Chat on WhatsApp
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-white/5 border border-white/40
                         text-white rounded-full font-bold backdrop-blur-sm min-w-[170px]"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Icons */}
        <div className="mt-10 flex justify-center gap-10 opacity-90">
          {[
            { icon: ShieldCheck, text: 'PPP Certified' },
            { icon: Award, text: 'Top Brand' },
            { icon: Leaf, text: 'Pure Nature' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm uppercase">
              <item.icon className="w-5 h-5 text-brand-accent" />
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </section>
  );
};
