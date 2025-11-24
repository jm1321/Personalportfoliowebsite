import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Let's Work Together" subtitle="Contact Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A1A3F] text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Decorative Circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00E5FF] rounded-full blur-[100px] opacity-20" />
            
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Have a project in mind or need technical assistance? Fill out the form or contact me directly. 
              I usually respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="text-[#00E5FF] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-300">john.miller.dg@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="text-[#00E5FF] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="text-[#00E5FF] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-300">Manila, Philippines</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[Linkedin, Github, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#00E5FF] hover:text-[#0A1A3F] transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-2"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-gray-50 border-gray-200 focus:border-[#00E5FF] focus:ring-[#00E5FF]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-50 border-gray-200 focus:border-[#00E5FF] focus:ring-[#00E5FF]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-gray-50 border-gray-200 focus:border-[#00E5FF] focus:ring-[#00E5FF]" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-[#00E5FF] focus:ring-[#00E5FF]" />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-[#00E5FF] text-[#0A1A3F] hover:bg-[#00E5FF]/90 font-bold text-base">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
