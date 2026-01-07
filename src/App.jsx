import React from 'react';
// HAPUS IMPORT 'BrowserRouter', Cukup Routes & Route saja
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Hero from './page/Hero';
import AboutMe from './page/AboutMe';
import Skills from './page/Skills';
import Experiences from './page/Experiences';
import Projects from './page/Projects-section';
import ProjectDetail from './page/ProjectsDetail-section';
import Contact from './page/Contact';
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