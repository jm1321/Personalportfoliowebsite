import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1A3F] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-4 block">
              JM<span className="text-[#00E5FF]">.</span>DG
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Digital Solutions Specialist helping businesses grow through technology and design.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-[#00E5FF] transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-[#00E5FF] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#00E5FF] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#00E5FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>IT Support</li>
              <li>Cloud Infrastructure</li>
              <li>Web Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} John Miller De Guzman. All rights reserved.
          </p>
          
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            size="icon" 
            className="bg-[#0A1A3F] text-white border-gray-700 hover:bg-[#00E5FF] hover:text-[#0A1A3F] hover:border-[#00E5FF] rounded-full transition-all"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
