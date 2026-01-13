import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email format');
      return;
    }
    
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email configuration is missing. Please contact the administrator.'
      });
      setIsLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setEmailError('');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsLoading(false);
      
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

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

  const formVariants = {
    initial: { opacity: 0, x: -40 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    }
  };

  const socialContainerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const socialLinkVariants = {
    initial: { opacity: 0, x: 20 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC]"
          variants={titleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p 
          className="text-center mb-8 mt-4 text-[#CBD5E1]"
          variants={subtitleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          Have an idea, a project, or something worth exploring? Let's talk!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] lg:grid-cols-[2fr_1fr] gap-12 md:gap-8 lg:gap-10 mt-8 pt-8">
          <motion.form 
            className="space-y-4 md:space-y-2" 
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
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

              <FormField label={
                <div className="flex items-center gap-2">
                  <span>Email</span>
                  {emailError && (
                    <motion.span 
                      className="text-red-400 text-xs drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {emailError}
                    </motion.span>
                  )}
                </div>
              }>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputStyles} ${emailError ? 'border-red-500 focus:border-red-500' : ''}`}
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

            <div className='pt-0 md:pt-2 flex items-center gap-4'>
              <motion.button 
                type="submit"
                disabled={isLoading}
                className={`
                  w-[150px] lg:w-[180px] flex items-center justify-center gap-2 rounded bg-[#F1A7C6] px-6 md:px-6 lg:px-8 py-2.5 md:py-3 text-xs lg:text-sm font-bold text-slate-900 shadow-[0_0_20px_rgba(241,167,198,0.3)] transition transform whitespace-nowrap
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F1A7C6]/90'}
                `}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                <SendHorizonal className={`w-[16px] h-[16px] lg:w-[20px] md:h-[20px] transition-transform ${isLoading ? 'animate-pulse' : ''}`}/>
              </motion.button>

              {status.message && (
                <motion.p 
                  className={`text-sm font-sm ${
                    status.type === 'success' 
                      ? 'text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]' 
                      : 'text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.p>
              )}
            </div>
          </motion.form>

          <motion.div 
            className="space-y-4 text-[#CBD5E1]/60"
            variants={socialContainerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a 
              className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href="mailto:dealovasalmah12@gmail.com"
              variants={socialLinkVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Mail size={18}/>
              dealovasalmah12@gmail.com
            </motion.a>

            <motion.a 
              className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href='https://github.com/dvsalmah'
              target='_blank'
              rel='noopener noreferrer'
              variants={socialLinkVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Github size={18}/>
              dvsalmah
            </motion.a>

            <motion.a 
              className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href='https://linkedin.com/in/dealova-ns'
              target='_blank'
              rel='noopener noreferrer'
              variants={socialLinkVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Linkedin size={18}/>
              dealova-ns
            </motion.a>

            <motion.a 
              className="flex items-center gap-2 hover:text-[#F1A7C6]" 
              href='https://instagram.com/dnabs_'
              target='_blank'
              rel='noopener noreferrer'
              variants={socialLinkVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Instagram size={18}/>
              dnabs_
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;