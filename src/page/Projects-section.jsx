import React from 'react';
import { Card, CardContent } from '../components/ui/card'; // Sesuaikan path jika berbeda
import { Badge } from '../components/ui/badge';       // Sesuaikan path jika berbeda
// Pastikan install lucide-react untuk icon: npm i lucide-react
import { Github, ExternalLink, Globe } from 'lucide-react'; 

const Projects = () => {
  // 1. Siapkan Data Project
  const projects = [
    {
      title: "Cashfam",
      description: "Collaborative financial management app with role-based permissions for shared budgeting and expense tracking.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      logo: "💸", // Bisa diganti URL gambar: "https://..."
      link: "#",
      github: "#"
    },
    {
      title: "Health Tracker",
      description: "A comprehensive health monitoring dashboard allowing users to track vitals, appointments, and medication schedules.",
      tags: ["Next.js", "TypeScript", "Prisma"],
      logo: "🏥",
      link: "#",
      github: "#"
    },
    // Tambahkan project lain di sini...
  ];

  return (
    <section id="projects" className="py-24 bg-[#0F172A] text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              // Styling Card Utama: Background gelap, border tipis, rounded
              className="bg-[#1E293B] border-slate-800 text-slate-200 overflow-hidden hover:border-slate-600 transition-all duration-300 shadow-xl"
            >
              <CardContent className="p-6 flex flex-col h-full">
                
                {/* Header: Logo & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-xl border border-slate-700">
                    {/* Jika pakai gambar: <img src={project.logo} className="rounded-full" /> */}
                    {project.logo}
                  </div>
                  <h3 className="font-bold text-xl text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      // Styling Badge: Background gelap agak transparan, text kecil
                      className="bg-slate-900/50 text-slate-300 border border-slate-700 hover:bg-slate-800 px-3 py-1 rounded-full font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  
                  {/* Tombol Utama "View Project" */}
                  <a 
                    href={project.link} 
                    className="flex-1 bg-slate-100 text-slate-900 hover:bg-white font-medium text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    View Project <Globe size={16} />
                  </a>

                  {/* Tombol Icon Github */}
                  <a 
                    href={project.github}
                    className="p-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <Github size={20} />
                  </a>

                  {/* Tombol Icon External Link */}
                  <a 
                    href={project.link}
                    className="p-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>

                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;