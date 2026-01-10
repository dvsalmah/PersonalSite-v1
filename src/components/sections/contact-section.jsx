import React, { useState } from 'react';
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea'; 
import {SendHorizonal, Mail, Github, Instagram, Linkedin } from 'lucide-react';

const inputStyles = "w-full px-3 py-2 bg-slate-800 border border-slate-500 rounded-lg focus:border-[#F1A7C6] focus:shadow-xl focus:shadow-[#F1A7C6]/10 focus:outline-none transition-colors text-slate-100 placeholder:text-slate-500";

const FormField = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-slate-200 text-sm font-medium">
      {label}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC]">Get in Touch</h2>
        <p className="text-center mb-8 mt-4 text-[#CBD5E1]">Have an idea, a project, or something worth exploring? Let’s talk!</p>       

        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] lg:grid-cols-[2fr_1fr] gap-12 md:gap-8 lg:gap-10 mt-8 pt-8">
          <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Name">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles} 
                  required
                />
              </FormField>

              <FormField label="Email">
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
            </div>

            <FormField label="Subject">
              <Input
                type="text"
                name="subject"
                placeholder="What's your idea?"
                value={formData.subject}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>

            <FormField label="Message">
              <Textarea
                name="message"
                placeholder="Share the details here.."
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyles} min-h-[150px] resize-none`} 
                required
              />
            </FormField>

            <div className='pt-0 md:pt-2'>
            <button 
              type="submit" 
              className="
                w-[150px] lg:w-[180px] flex items-center justify-center gap-2 rounded bg-[#F1A7C6] px-6 md:px-6 lg:px-8 py-2.5 md:py-3 text-xs lg:text-sm font-bold text-slate-900 shadow-[0_0_20px_rgba(241,167,198,0.3)] transition transform hover:bg-[#F1A7C6]/90 whitespace-nowrap">
              Send Message
              <SendHorizonal className='w-[16px] h-[16px] lg:w-[20px] md:h-[20px] transition-transform'/>
            </button>
            </div>
          </form>

            <div className="space-y-4 text-[#CBD5E1]/60">
              <a className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href="mailto:dealovasalmah12@gmail.com"
              >
                <Mail size={18}/>
                dealovasalmah12@gmail.com
              </a>
              <a className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href='https://github.com/dvsalmah'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Github size={18}/>
                dvsalmah
              </a>
              <a className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href='https://linkedin.com/in/dealova-ns'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Linkedin size={18}/>
                dealova-ns
              </a>
              <a className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href='https://instagram.com/dnabs_'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Instagram size={18}/>
                dnabs_
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;