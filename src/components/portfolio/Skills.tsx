import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { 
  Monitor, Server, Database, Layout, PenTool, FileSpreadsheet, 
  Cloud, Command, HardDrive, Globe, Image, Table 
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "IT & Cloud",
    icon: <Server className="w-6 h-6 text-[#00E5FF]" />,
    skills: [
      { name: "Windows", icon: <Monitor className="w-6 h-6" /> },
      { name: "macOS", icon: <Command className="w-6 h-6" /> },
      { name: "Linux", icon: <HardDrive className="w-6 h-6" /> },
      { name: "Microsoft 365", icon: <Cloud className="w-6 h-6" /> },
      { name: "Google Workspace", icon: <Cloud className="w-6 h-6" /> },
      { name: "AWS", icon: <Server className="w-6 h-6" /> },
    ]
  },
  {
    title: "Web & Design",
    icon: <Layout className="w-6 h-6 text-[#00E5FF]" />,
    skills: [
      { name: "Figma", icon: <PenTool className="w-6 h-6" /> },
      { name: "Photoshop", icon: <Image className="w-6 h-6" /> },
      { name: "Illustrator", icon: <PenTool className="w-6 h-6" /> },
      { name: "Canva", icon: <Layout className="w-6 h-6" /> },
      { name: "HTML/CSS", icon: <CodeIcon /> },
      { name: "WordPress", icon: <Globe className="w-6 h-6" /> },
    ]
  },
  {
    title: "Data & Productivity",
    icon: <Database className="w-6 h-6 text-[#00E5FF]" />,
    skills: [
      { name: "Excel", icon: <FileSpreadsheet className="w-6 h-6" /> },
      { name: "Google Sheets", icon: <Table className="w-6 h-6" /> },
      { name: "Notion", icon: <Database className="w-6 h-6" /> },
    ]
  }
];

function CodeIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-6 h-6"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export function Skills() {
  return (
    <section className="py-20 bg-[#F4F6F9]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Skills & Expertise" subtitle="My Toolkit" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="p-2 bg-[#00E5FF]/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A1A3F]">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <TooltipProvider>
                  {category.skills.map((skill, skillIndex) => {
                    const colors: Record<string, string> = {
                      "Windows": "#0078D6",
                      "macOS": "#333333",
                      "Linux": "#FCC624",
                      "Microsoft 365": "#503796",
                      "Google Workspace": "#4285F4",
                      "AWS": "#FF9900",
                      "Figma": "#F24E1E",
                      "Photoshop": "#31A8FF",
                      "Illustrator": "#FF9A00",
                      "Canva": "#00C4CC",
                      "HTML/CSS": "#E34F26",
                      "WordPress": "#21759B",
                      "Excel": "#217346",
                      "Google Sheets": "#34A853",
                      "Notion": "#000000"
                    };
                    const color = colors[skill.name] || "#6B7280";

                    return (
                      <Tooltip key={skillIndex}>
                        <TooltipTrigger asChild>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            style={{ color: color }}
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer border border-gray-200 hover:border-current transition-colors"
                          >
                            {skill.icon}
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
