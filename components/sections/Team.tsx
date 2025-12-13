import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Quote } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-2">
            Management
          </h2>
          <h3 className="text-4xl font-serif font-bold text-brand-dark">
            Ramzo Leadership
          </h3>
          <p className="text-gray-500 mt-4">
            Guided by vision, powered by teamwork.
          </p>
        </FadeIn>

        {/* CEO Row */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* CEO Card */}
<FadeIn delay={0.1} className="w-full max-w-sm">
  <div className="group text-center">
    <div
      className="relative w-72 h-72 mx-auto mb-6 rounded-full overflow-hidden
                 border-4 border-brand-accent/20 shadow-xl"
    >
      <img
        src="ceo.jpeg"
        alt="Chief Executive Officer"
        className="w-full h-full object-cover
                   object-[center_20%]
                   filter grayscale group-hover:grayscale-0
                   transition-transform duration-500
                   group-hover:scale-105"
      />

      {/* subtle hover glow */}
      <div
        className="absolute inset-0 bg-brand-primary/10 opacity-0
                   group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>

    <h4 className="text-2xl font-bold text-brand-dark mb-1">
      The CEO
    </h4>
    <p className="text-brand-primary font-medium tracking-wide">
      Chief Executive Officer
    </p>
  </div>
</FadeIn>


          {/* CEO Quote */}
          <FadeIn delay={0.2} className="w-full max-w-xl bg-brand-light p-8 rounded-2xl relative">
            <Quote className="w-12 h-12 text-brand-accent/20 absolute top-4 left-4" />
            <div className="relative z-10 text-center md:text-left pt-6">
              <h4 className="text-xl font-bold text-brand-dark mb-4">
                A Word from the CEO
              </h4>
              <p className="text-gray-600 italic text-lg leading-relaxed mb-4">
                "At Ramzo Spring, we don't just sell water; we deliver life.
                My promise is absolute purity, safety, and consistency in every
                sachet. We are built on integrity and are reaching the top with grace."
              </p>
              <div className="w-16 h-1 bg-brand-accent rounded-full mx-auto md:mx-0"></div>
            </div>
          </FadeIn>

        </div>

        {/* Team Image */}
        <FadeIn delay={0.3} className="mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent z-10"></div>

            {/* Team Photo */}
            <img 
              src="team_pic.png" 
              alt="Ramzo Team" 
              className="w-full h-[420px] object-cover 
                         object-[center_35%] md:object-[center_20%]
                         transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">
                Our Dedicated Team
              </h3>
              <p className="text-gray-200 text-lg">
                The hardworking hands behind every drop of purity.
                Our team is our strength.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
