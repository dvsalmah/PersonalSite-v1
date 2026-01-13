import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Hero from '@/components/sections/hero-section';
import AboutMe from '@/components/sections/about-section';
import Skills from '@/components/sections/skill-section';
import Experiences from '@/components/sections/experience-section';
import Projects from '@/components/sections/project-section';
import ProjectDetail from '@/components/sections/project-detail';
import Contact from '@/components/sections/contact-section';
import Footer from './components/layout/Footer';

function App() {
  const { pathname, hash, key } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });

          window.history.replaceState(null, '', window.location.pathname);
        }, 100);
      }
    } 
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

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