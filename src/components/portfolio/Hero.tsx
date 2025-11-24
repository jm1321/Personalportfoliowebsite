import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Server, Code, Palette, Database } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A1A3F]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full border border-[#00E5FF] border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full border border-white/20"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon icon={<Server size={24} />} top="20%" left="10%" delay={0} />
        <FloatingIcon icon={<Code size={24} />} top="15%" right="15%" delay={2} />
        <FloatingIcon icon={<Palette size={24} />} bottom="20%" left="20%" delay={1} />
        <FloatingIcon icon={<Database size={24} />} bottom="25%" right="10%" delay={3} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#00E5FF] text-xl md:text-2xl font-semibold mb-4">Hello, I'm John Miller De Guzman</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Digital Solutions <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-white">Specialist</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              I help businesses build reliable IT systems, cloud infrastructure, and impactful digital designs. 
              Your partner in navigating the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                size="lg"
                className="bg-[#00E5FF] text-[#0A1A3F] hover:bg-[#00E5FF]/90 font-bold w-full sm:w-auto"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-black hover:bg-white hover:text-[#0A1A3F] font-bold w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-[#00E5FF] rounded-full blur-[80px] opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#00E5FF]/30 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738566061505-556830f8b8f5"
                alt="John Miller De Guzman"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Status Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-10 -left-4 md:left-0 bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 shadow-lg text-white flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <p className="text-xs text-gray-300">Status</p>
                <p className="font-bold text-sm">Open to Work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ icon, top, left, right, bottom, delay }: { icon: React.ReactNode, top?: string, left?: string, right?: string, bottom?: string, delay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
      className="absolute text-[#00E5FF]/30"
      style={{ top, left, right, bottom }}
    >
      {icon}
    </motion.div>
  );
}
