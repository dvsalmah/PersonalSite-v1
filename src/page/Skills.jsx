import React from 'react';
import { HoverEffect } from "../components/ui/card-hover-effect"; 

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 48 48" 
          className="w-16 h-16 mb-6 text-slate-300 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7.5,5.5h33a2,2,0,0,1,2,2v33a2,2,0,0,1-2,2H7.5a2,2,0,0,1-2-2V7.5A2,2,0,0,1,7.5,5.5Zm5,4.81a2.21,2.21,0,0,0-2.22,2.22v21a2.22,2.22,0,0,0,2.22,2.22h6.85a2.22,2.22,0,0,0,2.21-2.22v-21a2.21,2.21,0,0,0-2.21-2.22Zm16.09,0a2.22,2.22,0,0,0-2.22,2.22V24.28a2.23,2.23,0,0,0,2.22,2.22h6.85a2.22,2.22,0,0,0,2.22-2.22V12.53a2.21,2.21,0,0,0-2.22-2.22Z" />
        </svg>
      )
    },
    {
      title: "Frontend Development"
    },
    {
      title: "Languages"
    },
    {
      title: "Database Management"
    },
    {
      title: "AI & Computer Vision"
    },
    {
      title: "Tools"
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#F8FAFC]">
          Skills & Technologies
        </h2>
        
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
        Driven by product thinking, supported by technical skills.
        </p>
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={skillCategories} />
        </div>

      </div>
    </section>
  );
};

export default Skills;