import React from 'react';
import { Product } from '../../types';
import { FadeIn } from '../ui/FadeIn';
import { MessageCircle, PackageCheck } from 'lucide-react';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Pure Water Sachet',
    size: '500ml',
    description: 'Refreshing, pure water in hygienic sachets. Perfect for events, daily hydration, and on-the-go refreshment.',
    image: '/prod.png',
  },

  {
    id: 'p2',
    name: 'Pure Water Bottle',
    size: '500ml',
    description: 'Refreshing, pure water in hygienic bottles. Perfect for events, daily hydration, and on-the-go refreshment.',
    image: '/bottle_picture.png',
  },
  {
    id: 'p3',
    name: 'Ramzo Wholesale Bundle',
    size: '20 Sachets / Bundle',
    description: 'Our signature product. Each bundle undergoes our rigorous PPP process (Purification, Packeting, Packaging) to ensure absolute safety.',
    image: '/bundle.png', // Placeholder for bulk/bundle
    popular: true
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-2">Our Collection</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark mb-4">Exclusively Pouched Water</h3>
            <p className="text-gray-600">
              Rated Top 20 in Sierra Leone. We specialize in high-quality sachet water, produced via our advanced PPP process.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.2} className="w-full md:w-1/2 max-w-md">
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-500 h-full border border-gray-100 hover:-translate-y-2">
                {product.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <PackageCheck className="w-3 h-3" />
                    PPP VERIFIED
                  </div>
                )}
                
                <div className="relative h-72 overflow-hidden bg-gray-50">
                   <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/0 transition-colors duration-500 z-10 pointer-events-none" />
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">{product.name}</h4>
                      <p className="text-brand-accent font-medium text-lg">{product.size}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <a 
                    href={`https://wa.me/447950487080?text=I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-brand-primary text-white font-semibold hover:bg-brand-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/25 group-hover:shadow-brand-primary/40 group-hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Us
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};