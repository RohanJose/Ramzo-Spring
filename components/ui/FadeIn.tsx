import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  viewportMargin?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "",
  viewportMargin = "-10% 0px"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin as any });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 60 };
      case 'down': return { opacity: 0, y: -60 };
      case 'left': return { opacity: 0, x: 60 };
      case 'right': return { opacity: 0, x: -60 };
      case 'none': return { opacity: 0, scale: 0.95 };
      default: return { opacity: 0, y: 60 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up': return { opacity: 1, y: 0 };
      case 'down': return { opacity: 1, y: 0 };
      case 'left': return { opacity: 1, x: 0 };
      case 'right': return { opacity: 1, x: 0 };
      case 'none': return { opacity: 1, scale: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ 
        duration: 1.0, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] // Custom smooth bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};