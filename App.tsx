import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Products } from './components/sections/Products';
import { Process } from './components/sections/Process';
import { Team } from './components/sections/Team';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-accent selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Team />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;