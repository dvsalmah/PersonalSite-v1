import React from 'react';
import { HoverEffect } from "../components/ui/card-hover-effect"; 

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      badges: ["Leadership", "Product Thinking", "Requirement Analysis", "User Research", " Problem Discovery", "Roadmapping"]
    },
    {
      title: "Frontend Development",
      badges: ["React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Programming Languages",
      badges: ["Java", "Python", "JavaScript", "C++"]
    },
    {
      title: "Tools",
      badges: ["Git", "VSCode", "Trello", "Notion", "Figma", "Figjam"]
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC]">
          Skills & Technologies
        </h2>
        
        <p className="text-center text-slate-400 mb-12 mt-4 max-w-2xl mx-auto">
        Driven by product thinking, supported by technical skills
        </p>
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={skillCategories} />
        </div>

      </div>
    </section>
  );
};

export default Skills;