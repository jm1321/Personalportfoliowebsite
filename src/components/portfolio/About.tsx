import React from 'react';
import { motion } from 'motion/react';
import { User, CheckCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d"
                alt="John Miller De Guzman Working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1A3F]/20 mix-blend-multiply" />
            </div>
            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-[200px] hidden md:block">
              <h4 className="text-4xl font-bold text-[#00E5FF] mb-1">5+</h4>
              <p className="text-[#0A1A3F] font-medium text-sm leading-tight">Years of Experience in Digital Solutions</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h4 className="text-[#00E5FF] font-semibold uppercase tracking-wider mb-2">About Me</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3F] mb-6">
              Bridging the Gap Between Technology & Design
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a Digital Solutions Specialist dedicated to helping businesses optimize their IT infrastructure and enhance their digital presence. 
              With a unique blend of technical expertise in cloud services and data management, combined with a creative eye for web and graphic design, 
              I provide comprehensive solutions that drive efficiency and growth.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether it's troubleshooting complex network issues, migrating data to the cloud, or designing a stunning user interface, 
              I approach every project with precision, reliability, and a focus on delivering tangible results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['IT Support & Troubleshooting', 'Cloud Infrastructure', 'Web Design & Development', 'Graphic Design'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#00E5FF] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#0A1A3F] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
