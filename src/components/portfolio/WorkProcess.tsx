import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { MessageSquare, ClipboardList, PenTool, SearchCheck, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "We discuss your needs, goals, and current challenges to define the project scope.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Planning",
    description: "I create a detailed roadmap, including timelines, technology stack, and key milestones.",
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Design & Dev",
    description: "This is where the magic happens. I design the visuals and build the technical solution.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Testing",
    description: "Rigorous testing to ensure everything is bug-free, secure, and performs optimally.",
    icon: <SearchCheck className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Delivery & Support",
    description: "Final launch and ongoing support to ensure your long-term success.",
    icon: <Rocket className="w-6 h-6" />
  }
];

export function WorkProcess() {
  return (
    <section id="process" className="py-20 bg-[#0A1A3F] text-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-[#00E5FF] rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle title="How I Work" subtitle="My Process" className="text-white" />
        
        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A1A3F] border-2 border-[#00E5FF] flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#00E5FF] group-hover:text-[#0A1A3F] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#00E5FF] transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
