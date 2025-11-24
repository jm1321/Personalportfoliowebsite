import React from 'react';
import { Navbar } from './components/portfolio/Navbar';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Skills } from './components/portfolio/Skills';
import { Services } from './components/portfolio/Services';
import { Portfolio } from './components/portfolio/Portfolio';
import { Testimonials } from './components/portfolio/Testimonials';
import { WorkProcess } from './components/portfolio/WorkProcess';
import { FAQ } from './components/portfolio/FAQ';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <WorkProcess />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
