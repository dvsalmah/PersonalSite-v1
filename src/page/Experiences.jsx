import React from 'react';
import {Timeline} from "../components/ui/timeline";

const Experiences = () => {
  const experiencesData = [
    {
      title: "Raion Community FILKOM UB",
      year: "Jan 2026 - Present",
      role: "Vice Chief of Resource and Development Unit",
      description: "Lead human resource development initiatives and monitor work programs.",
      tech: ["Leadership", "Strategic Planning", "Team Management"] 
    },
    {
      year: "Apr 2025 - Present",
      role: "Staff of Product Manager",
      description: "Manage product roadmaps, conduct market research, and translate business requirements into technical specifications.",
      tech: ["Trello", "Figma", "Agile", "User & Market Research"]
    },
    {
      title: "ROBOTIIK FILKOM UB",
      year: "Apr - Dec 2025",
      role: "Staff of Vision Programming Quadcopter",
      description: "Develop computer vision algorithms for autonomous quadcopter navigation and object detection systems.",
      tech: ["Python", "OpenCV", "YOLOv8", "YOLOv5"]
    },
    {
      title: "DevGirls FILKOM UB",
      year: "Apr - Dec 2025",
      role: "Staff of Software Developer",
      description: "Active in workshop and learn to build responsive web applications and collaborate with design teams to implement user-centered interfaces.",
      tech: ["React.js", "Javascript", "Tailwind CSS"]
    },
    {
      title: "3rd Winner Business Plan Competition (BPC)",
      year: "Ags 2025",
      role: "IT-FEST KBMDSI FILKOM UB",
      description: "Conceived 'UrJobs', an integrated career ecosystem designed to bridge the gap between education and industry through AI-driven job matching and personalized mentorship programs."
    },
    {
      title: "Top 7 Finalist Business Idea Competition (BIC)",
      year: "Oct 2025",
      role: "BIC EBIFEST UPN Veteran Jakarta",
      description: "Proposed 'StyleMe!', an AI-powered fashion assistant that solves decision fatigue by offering a digital wardrobe management system and personalized outfit recommendations to promote sustainable fashion."
    }
  ];
  return (
    <section id="experiences" className="py-20 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC]">Experiences</h2>
        <p className="text-center mb-12 mt-4 text-[#CBD5E1]">A journey of growth through impactful roles</p>
        <Timeline data={experiencesData}/>
      </div>
    </section>
  );
};

export default Experiences;