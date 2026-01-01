import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'HTML5', 'CSS3',
    'Git', 'Docker', 'AWS', 'TypeScript'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg text-center font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 hover:transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;