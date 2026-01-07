import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Target, ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: "urjobs",
      title: "UrJobs",
      tagline: "Smart Steps Towards Your Dream Career",
      description: "Comprehensive career development platform integrating job search, mentoring, and skill certification. Secured 3rd place in BPC Multimedia competition.",
      tags: ["Career-Tech", "Marketing Lead", "GTM Strategy", "3-Person Team"],
      context: "BPC Multimedia - IT Fest",
      logo: "💼"
    },
    {
      id: "styleme",
      title: "StyleMe",
      tagline: "When 'Nothing to Wear' Meets 'What to Wear Next'",
      description: "Indonesia's first hybrid fashion assistant combining AI-powered recommendations with professional stylist consultations. Top 7 finalist in BPC EBI Fest.",
      tags: ["Fashion-Tech", "Strategy Lead", "Product Vision", "3-Person Team"],
      context: "BPC EBI Fest 2025",
      logo: "👗"
    },
    {
      id: "saveup",
      title: "SaveUp",
      tagline: "Smart Habits for Your Brighter Financial Future",
      description: "AI-powered money management app for Gen Z. Led product definition and Agile development in internal hackathon using Scrum methodology.",
      tags: ["Fintech", "Product Manager", "Agile/Scrum", "3-Person Team"],
      context: "HackJam #14",
      logo: "💰"
    },
    {
      id: "personalsite-v1",
      title: "PersonalSite-v1",
      tagline: "Modern Portfolio Crafted with Performance & Motion",
      description: "Personal portfolio website showcasing PM projects and frontend skills. Built with React, Framer Motion, and Tailwind CSS achieving 95+ Lighthouse scores.",
      tags: ["React.js", "Framer Motion", "Tailwind CSS", "Performance"],
      context: "Personal Project",
      github: "https://github.com/dvsalmah/PersonalSite-v1",
      liveDemo: "https://dealovaa-site.vercel.app",
      logo: "🌐"
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0F172A] text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          A small collection of project shaped by curiosity, iteration, and product thinking
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#1E293B] text-card-foreground rounded-xl border border-slate-700 relative z-20 group hover:border-[#F1A7C6] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#F1A7C6]/10 flex flex-col overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col h-full">

                {/* Project Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 mt-4 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-2xl border border-slate-700 group-hover:border-[#F1A7C6] transition-colors">
                    {project.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mt-4 text-lg text-[#F8FAFC] tracking-tight truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate">
                      {project.context}
                    </p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-[#F1A7C6] text-xs font-medium mb-2 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm font-normal leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-slate-900/50 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full font-medium text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  
                  {project.tags.length > 3 && (
                    <Badge 
                      variant="secondary" 
                      className="bg-slate-900/50 text-slate-400 border border-slate-700 px-2 py-1 rounded-full font-medium text-xs"
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  {/* Button View Case Study / View Project */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="relative bg-[#F8FAFC] text-slate-900 hover:bg-slate-100 hover:pr-10 font-semibold text-sm py-2.5 px-4 pr-8 rounded-lg flex items-center justify-start gap-2 transition-all duration-200 group/btn"
                  >
                    View Project
                    <ArrowRight size={18} className="absolute right-2 transition-transform" />
                  </Link>

                  {/* GitHub Button - Hanya muncul jika ada property github */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {/* Live Demo Button - Hanya muncul jika ada property liveDemo */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                  {/* Category Badge (Optional - bisa dihapus kalau tidak perlu) */}
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Target size={14} className="text-[#F1A7C6]" />
                    <span className="hidden sm:inline">{project.category}</span>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional: Section Footer with CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Want to see the full process behind these projects?
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 text-[#F1A7C6] hover:text-[#F8FAFC] font-medium text-sm transition-colors"
          >
            Let's discuss product strategy
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;