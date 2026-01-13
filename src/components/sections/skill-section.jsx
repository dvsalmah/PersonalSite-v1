import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from "@/components/ui/card-hover-effect"; 

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

  const gridVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC]"
          variants={titleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          className="text-center text-slate-400 mb-12 mt-4 max-w-2xl mx-auto"
          variants={subtitleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          Driven by product thinking, supported by technical skills
        </motion.p>

        <motion.div 
          className="max-w-5xl mx-auto px-8"
          variants={gridVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          <HoverEffect items={skillCategories} />
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;