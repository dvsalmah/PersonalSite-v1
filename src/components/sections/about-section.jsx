import React from 'react';
import { motion } from 'framer-motion';
import Stack from "@/components/ui/stack";

const AboutMe = () => {
  const photos = [
    {id:1, src:"/assets/slide1.webp", alt:"Photo 1"},
    {id:2, src:"/assets/slide2.webp", alt:"Photo 2"},
    {id:3, src:"/assets/slide3.webp", alt:"Photo 3"},
    {id:4, src:"/assets/slide4.webp", alt:"Photo 4"},
    {id:5, src:"/assets/slide5.webp", alt:"Photo 5"},
  ];

  const stackCards = photos.map(photo => (
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-full object-cover pointer-events-none rounded-2xl"
    />
  ));

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    initial: { opacity: 0, x: -60 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    }
  };

  const stackVariants = {
    initial: { opacity: 0, x: 60 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0F172A] text-slate-100 px-8 md:px-16 lg:px-24">
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto px-6 md:px-5">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F8FAFC]"
          variants={titleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          Know More
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            className="flex-1 order-1 md:order-2"
            variants={textVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-center md:text-left text-[#CBD5E1] text-lg leading-relaxed">
              A second-year Computer Science student at Brawijaya University with a growing interest in Product Management, alongside a strong curiosity for front-end development.
              Experience also includes working in robotics using Python, OpenCV, and YOLO.
            </p>
          </motion.div>

          <motion.div 
            className="flex-shrink-0 order-2 md:order-1 pr-4 lg:pr-8"
            variants={stackVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-64 h-72 lg:w-72 lg:h-80">
              <Stack
                cards={stackCards}
                randomRotation={true}
                sensitivity={150}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                mobileClickOnly={true}
                animationConfig={{ stiffness: 260, damping: 20 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;