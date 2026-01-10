import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Hero from './sections/hero-section';
import AboutMe from './sections/about-section';
import Skills from './sections/skill-section';
import Experiences from './sections/experience-section';
import Projects from './sections/project-section';
import ProjectDetail from './sections/project-detail';
import Contact from './sections/contact-section';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutMe />
            <Skills />
            <Experiences />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;