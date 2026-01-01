import React from 'react';
import Header from './components/layout/Navbar';
import Hero from './page/Hero';
import AboutMe from './page/AboutMe';  // Import baru
import Skills from './page/Skills';
import Experiences from './page/Experiences';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      <Hero />
      <AboutMe />  {/* Tambah di sini, setelah Hero */}
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;