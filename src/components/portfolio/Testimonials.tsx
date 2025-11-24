import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    text: "John is an absolute professional. He not only solved our critical server issues but also redesigned our internal dashboard. The transition was seamless and efficient."
  },
  {
    name: "Michael Chen",
    role: "Director, Creative Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "Finding someone who understands both the technical and creative sides of a project is rare. John delivered a stunning website that is also lightning fast."
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, LogisticsCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    text: "Our data management was a mess before John stepped in. He organized everything and implemented a cloud backup system that gives us peace of mind."
  },
  {
    name: "David Park",
    role: "Founder, AppFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "Highly recommended! John's expertise in AWS helped us scale our application to thousands of users without a hitch."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Client Testimonials" subtitle="Feedback" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="bg-[#F4F6F9] p-8 rounded-xl relative h-full flex flex-col">
                      <Quote className="text-[#00E5FF]/20 w-12 h-12 absolute top-6 right-6" />
                      <p className="text-gray-600 italic mb-6 relative z-10 flex-grow">"{t.text}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                          <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0A1A3F]">{t.name}</h4>
                          <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
            {/* Mobile controls below */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
               <CarouselPrevious className="static translate-y-0" />
               <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
