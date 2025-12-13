import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { MapPin, Phone, Mail, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Ramzo Spring is the only water I trust for my family. The sachet quality is superior and the taste is incredibly fresh.",
    author: "Fatmata K.",
    role: "Loyal Customer"
  },
  {
    text: "As a shop owner in Freetown, reliability is key. Ramzo delivers on time, every time. My customers specifically ask for the 'Lion' water.",
    author: "Ibrahim S.",
    role: "Retail Partner"
  },
  {
    text: "The purity is unmatched. You can feel the difference compared to other brands. Proud to support a Top 20 company.",
    author: "Samuel B.",
    role: "Local Guide"
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden bg-white rounded-3xl shadow-2xl">
          
          {/* Info Side */}
          <div className="bg-brand-dark p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2" />
            
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-10 leading-relaxed">
                Contact Ramzo Spring for the best drinking water supply in Freetown. We are ready to serve you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Address</h5>
                    <p className="text-gray-400 text-sm">45 Easton Street, Freetown, Sierra Leone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Call Us</h5>
                    <p className="text-gray-400 text-sm block">+232 34 747 576</p>
                    <p className="text-gray-400 text-sm block">+232 31 299 140</p>
                    <p className="text-gray-400 text-sm block">+232 33 565 091</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Email</h5>
                    <p className="text-gray-400 text-sm">info@ramzospring.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               {/* Embed Google Map Image Placeholder */}
               <div className="w-full h-40 rounded-xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
                    alt="Map"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-full">View Location</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Testimonials Side (Replaced Form) */}
          <div className="p-12 bg-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-8 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              Trusted by Freetown
            </h3>
            
            <div className="space-y-8">
              {testimonials.map((item, index) => (
                <div key={index} className="relative bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <Quote className="w-8 h-8 text-brand-primary/10 absolute top-4 right-4" />
                  <p className="text-gray-600 mb-4 italic leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary font-bold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-dark text-sm">{item.author}</h5>
                      <span className="text-xs text-brand-primary uppercase tracking-wide font-medium">{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
               <p className="text-sm text-gray-400">Join thousands of satisfied customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};