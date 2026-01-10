import React from 'react';
import {Github, Linkedin, Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-[#F8FAFC] py-8 px-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className='flex flex-col'>
        <div className="flex flex-row justify-between items-center gap-6">
          <a href='#home'>
              <img 
                src="/icon.svg" 
                alt="Dealova Logo" 
                className="w-10 h-10 object-contain"
              />
          </a>
          <div className="flex space-x-4 text-[#CBD5E1]/60">
              <a className="flex items-center hover:text-[#F8FAFC]" 
              href='https://github.com/dvsalmah'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Github size={22}/>
              </a>
              <a className="flex items-center hover:text-[#F8FAFC]" 
              href='https://linkedin.com/in/dealova-ns'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Linkedin size={22}/>
              </a>
              <a className="flex items-center hover:text-[#F8FAFC]" 
              href='https://instagram.com/dnabs_'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Instagram size={22}/>
              </a>
        </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400/60 to-transparent my-4" />
          <p className="flex justify-center mb-4 md:mb-0">Dealova &copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;