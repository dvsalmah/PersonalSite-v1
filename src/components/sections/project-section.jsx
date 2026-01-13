import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: "urjobs",
      title: "UrJobs",
      tagline: "Smart Steps Towards Your Dream Career",
      description: "Comprehensive career development platform integrating job search, mentoring, and skill certification.",
      tags: ["Career-Tech", "Marketing Lead", "GTM Strategy", "3-Person Team"],
      context: "National Business Plan Competition",
      logo: "/assets/urjobs-icon.webp"
    },
    {
      id: "styleme",
      title: "StyleMe",
      tagline: "When 'Nothing to Wear' Meets 'What to Wear Next'",
      description: "Hybrid fashion assistant combining AI-powered recommendations with professional stylist consultations.",
      tags: ["Fashion-Tech", "Strategy Lead", "Product Vision", "3-Person Team"],
      context: "National Business Plan Competition",
      logo: "/assets/styleme-icon.webp"
    },
    {
      id: "saveup",
      title: "SaveUp",
      tagline: "Smart Habits for Your Brighter Financial Future",
      description: "AI-powered money management app for Gen Z. Led product definition and Agile development in Raion Hackjam using Scrum methodology.",
      tags: ["Fintech", "Product Manager", "Agile/Scrum", "3-Person Team"],
      context: "Collaboration Project",
      logo: "/assets/saveup-icon.webp"
    },
    {
      id: "takara",
      title: "Takara",
      tagline: "AI-Powered Kitchen Assistant for Zero-Waste Living",
      description: "AI-powered kitchen assistant using Computer Vision to reduce food waste by 30%.",
      tags: ["Food-Tech", "SDGS 12", "AI/Computer Vision", "3-Person Team"],
      context: "National Business Plan Competition",
      logo: "/assets/takara-icon.webp"
    },
    {
      id: "personalsite-v1",
      title: "PersonalSite-v1",
      tagline: "Modern Portfolio Crafted with Performance & Motion",
      description: "Personal portfolio website built with React.js, JavaScript, and ShadcnUI.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "ShadcnUI", "Framer Motion"],
      context: "Personal Project",
      github: "https://github.com/dvsalmah/PersonalSite-v1",
      liveDemo: "https://dealovaa-site.vercel.app",
      logo: "/assets/personalsite-icon.webp"
    }
  ];

  const totalProjects = projects.length;

  // Animations
  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
    }
  };

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0F172A] text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 md:px-0">       
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4"
            variants={titleVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base"
            variants={subtitleVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            A small collection of project shaped by curiosity, iteration, and product thinking
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => {
            const isLast = index === totalProjects - 1;
            const isSecondLast = index === totalProjects - 2;
            const remainderLg = totalProjects % 3;
            const remainderMd = totalProjects % 2; 
            let positioningClass = "md:col-span-2 lg:col-span-2"; 
            if (remainderLg === 2 && isSecondLast) {
               positioningClass += " lg:col-start-2"; 
            }
            else if (remainderLg === 1 && isLast) {
               positioningClass += " lg:col-start-3";
            }
            if (remainderMd === 1 && isLast) {
                positioningClass += " md:col-start-2";
            }

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={positioningClass}
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Card
                    className="bg-[#1E293B] text-card-foreground rounded-xl border border-slate-700 relative z-20 group hover:border-[#F1A7C6] transition-all duration-300 hover:shadow-xl hover:shadow-[#F1A7C6]/10 flex flex-col overflow-hidden h-full"
                  >
                    <CardContent className="p-6 flex flex-col h-full">

                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 mt-4 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-2xl border border-slate-700 group-hover:border-[#F1A7C6] transition-colors">
                          {project.logo.startsWith('/') || project.logo.startsWith('http') ? (
                            <img 
                              src={project.logo} 
                              alt={`${project.title} logo`}
                              className="w-[95%] h-[95%] object-cover rounded-full"
                            />
                          ) : (
                            <span>{project.logo}</span>
                          )}
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

                      <p className="text-[#F1A7C6] text-xs font-medium mb-2 line-clamp-1">
                        {project.tagline}
                      </p>

                      <p className="text-slate-400 text-sm font-normal leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 2).map((tag, idx) => (
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

                      <div className="flex items-center gap-3 mt-auto">
                        <Link
                          to={`/projects/${project.id}`}
                          className="relative bg-[#F8FAFC] text-slate-900 hover:bg-slate-100 hover:pr-10 font-semibold text-sm py-2.5 px-4 pr-8 rounded-lg flex items-center justify-start gap-2 transition-all duration-200 group/btn"
                        >
                          View Project
                          <ArrowRight size={18} className="absolute right-2 transition-transform" />
                        </Link>

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
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;