import React from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[#00E5FF] font-semibold uppercase tracking-wider mb-2 text-sm"
      >
        {subtitle}
      </motion.h3>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-[#0A1A3F]"
      >
        {title}
      </motion.h2>
      <div className={`h-1 w-20 bg-[#00E5FF] mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
