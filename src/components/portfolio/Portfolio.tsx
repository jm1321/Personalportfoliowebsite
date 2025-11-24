import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { ExternalLink, ZoomIn, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Category = 'All' | 'Web Design' | 'Graphics' | 'IT Projects' | 'Cloud Setup';

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  challenge: string;
  process: string;
  result: string;
  tools: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1750056393349-dfaf647f7400",
    description: "A comprehensive dashboard for managing online store inventory and analytics.",
    challenge: "The client needed a way to visualize complex sales data and manage inventory across multiple warehouses in real-time.",
    process: "I conducted user research to understand key metrics. Designed wireframes in Figma focusing on data visualization. Developed the frontend using React and Tailwind CSS.",
    result: "Reduced inventory management time by 40% and provided actionable insights through custom charts.",
    tools: ["Figma", "React", "Tailwind CSS", "Recharts"]
  },
  {
    id: 2,
    title: "Corporate Network Infrastructure",
    category: "IT Projects",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41",
    description: "Secure and scalable network setup for a mid-sized financial firm.",
    challenge: "The firm was experiencing slow connectivity and security vulnerabilities with their legacy system.",
    process: "Audited existing infrastructure. Designed a new network topology with VLANs for security. Implemented enterprise-grade firewalls and switches.",
    result: "Achieved 99.99% uptime and passed all security compliance audits.",
    tools: ["Cisco", "Firewalls", "VLAN Configuration", "Network Monitoring"]
  },
  {
    id: 3,
    title: "Cloud Migration Strategy",
    category: "Cloud Setup",
    image: "https://images.unsplash.com/photo-1646153114001-495dfb56506d",
    description: "Seamless migration of on-premise servers to AWS cloud environment.",
    challenge: "High maintenance costs of physical servers and lack of disaster recovery plan.",
    process: "Assessed workloads. Planned a lift-and-shift strategy for critical apps and refactoring for others. Set up AWS VPC, EC2 instances, and S3 buckets.",
    result: "Reduced operational costs by 30% and implemented automated backups for disaster recovery.",
    tools: ["AWS", "EC2", "S3", "Terraform"]
  },
  {
    id: 4,
    title: "Brand Identity Rebrand",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1717079556888-c23cb91b450f",
    description: "Complete visual identity overhaul for a tech startup.",
    challenge: "The startup's old branding felt outdated and didn't reflect their innovative nature.",
    process: "Created mood boards and color palettes. Designed a new logo, business cards, and social media assets.",
    result: "Increased brand recognition and engagement on social media by 50%.",
    tools: ["Adobe Illustrator", "Photoshop", "Branding Strategy"]
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1750056393349-dfaf647f7400",
    description: "High-converting landing page for a new software product.",
    challenge: "Low conversion rates on the previous landing page.",
    process: "Analyzed user behavior. Redesigned the layout to focus on value proposition and clear CTAs. optimized page load speed.",
    result: "Conversion rate improved by 25% in the first month.",
    tools: ["Figma", "HTML/CSS", "JavaScript", "SEO"]
  },
  {
    id: 6,
    title: "Secure Data Backup System",
    category: "IT Projects",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41",
    description: "Automated backup solution for a legal firm ensuring data integrity.",
    challenge: "Risk of data loss due to manual backup processes.",
    process: "Implemented a 3-2-1 backup strategy. Configured NAS for local backups and encrypted cloud storage for offsite redundancy.",
    result: "Eliminated manual errors and ensured 100% data recoverability.",
    tools: ["Synology NAS", "Cloud Storage", "Encryption", "Automation Scripting"]
  }
];

const categories: Category[] = ['All', 'Web Design', 'Graphics', 'IT Projects', 'Cloud Setup'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#F4F6F9]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Featured Projects" subtitle="My Work" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#00E5FF] text-[#0A1A3F] shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                   <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0A1A3F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <ZoomIn className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[#00E5FF] text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A1A3F] mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white text-[#0A1A3F]">
             {selectedProject && (
               <div className="flex flex-col h-[90vh] md:h-auto">
                 <div className="relative h-64 md:h-80 w-full shrink-0">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3F] to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                      <Badge className="bg-[#00E5FF] text-[#0A1A3F] hover:bg-[#00E5FF] mb-3 border-none">
                        {selectedProject.category}
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors"
                    >
                      <X size={20} />
                    </button>
                 </div>
                 
                 <ScrollArea className="flex-1 p-6 md:p-10">
                   <div className="grid md:grid-cols-3 gap-8">
                     <div className="md:col-span-2 space-y-8">
                       <div>
                         <h3 className="text-lg font-bold text-[#0A1A3F] mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 bg-[#00E5FF] rounded-full" /> Challenge
                         </h3>
                         <p className="text-gray-600 leading-relaxed">{selectedProject.challenge}</p>
                       </div>
                       <div>
                         <h3 className="text-lg font-bold text-[#0A1A3F] mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 bg-[#00E5FF] rounded-full" /> Process
                         </h3>
                         <p className="text-gray-600 leading-relaxed">{selectedProject.process}</p>
                       </div>
                       <div>
                         <h3 className="text-lg font-bold text-[#0A1A3F] mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 bg-[#00E5FF] rounded-full" /> Result
                         </h3>
                         <p className="text-gray-600 leading-relaxed">{selectedProject.result}</p>
                       </div>
                     </div>
                     
                     <div className="space-y-6">
                       <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                         <h3 className="font-bold text-[#0A1A3F] mb-4">Tools Used</h3>
                         <div className="flex flex-wrap gap-2">
                           {selectedProject.tools.map((tool, idx) => (
                             <Badge key={idx} variant="outline" className="bg-white text-gray-600 border-gray-200">
                               {tool}
                             </Badge>
                           ))}
                         </div>
                       </div>
                       <Button className="w-full bg-[#0A1A3F] text-white hover:bg-[#0A1A3F]/90">
                         View Live Project <ExternalLink className="ml-2 w-4 h-4" />
                       </Button>
                     </div>
                   </div>
                 </ScrollArea>
               </div>
             )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
