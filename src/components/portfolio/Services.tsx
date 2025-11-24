import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { 
  Wrench, Cloud, MonitorSmartphone, Palette, Database, Printer
} from 'lucide-react';

const services = [
  {
    title: "IT Support & Troubleshooting",
    description: "Expert diagnosis and resolution of hardware, software, and network issues to keep your business running smoothly.",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    title: "Network & Cloud Services",
    description: "Secure setup and management of cloud infrastructure (AWS, Microsoft 365) and reliable network configurations.",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    title: "Web Design & Landing Pages",
    description: "Creating responsive, fast, and visually appealing websites that convert visitors into loyal customers.",
    icon: <MonitorSmartphone className="w-8 h-8" />,
  },
  {
    title: "Graphic Design & Branding",
    description: "Impactful visual identities, logos, and marketing collateral that communicate your brand's story effectively.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    title: "Data Management",
    description: "Organizing, securing, and optimizing your data systems for better accessibility and decision-making.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "Printing & Marketing",
    description: "High-quality design for print materials including brochures, business cards, and banners.",
    icon: <Printer className="w-8 h-8" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="What I Do" subtitle="My Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A1A3F] to-[#00E5FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="mb-6 p-4 bg-[#00E5FF]/10 text-[#0A1A3F] rounded-full w-fit group-hover:bg-[#0A1A3F] group-hover:text-[#00E5FF] transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0A1A3F] mb-3 group-hover:text-[#00E5FF] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
