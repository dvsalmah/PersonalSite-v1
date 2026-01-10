import React from 'react';
import Stack from "@/components/ui/stack";

const AboutMe = () => {
  const photos = [
    {id:1, src:"/assets/slide1.webp", alt:"Photo 1"},
    {id:2, src:"/assets/slide2.webp", alt:"Photo 2"},
    {id:3, src:"/assets/slide3.webp", alt:"Photo 3"},
    {id:4, src:"/assets/slide4.webp", alt:"Photo 4"},
  ];

  const stackCards = photos.map(photo => (
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-full object-cover pointer-events-none rounded-2xl"
    />
  ));

  return (
    <section id="about" className="py-20 md:pt-8 lg:pt-12 bg-[#0F172A] relative transition-colors duration-300 overflow-hidden">
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto px-6 md:px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F8FAFC]">
          Know More
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 order-1 md:order-2">
            <p className="text-center md:text-left text-[#CBD5E1] text-lg leading-relaxed">
              A second-year Computer Science student at Brawijaya University with a growing interest in Product Management, alongside a strong curiosity for front-end development.
              Experience also includes working in robotics using Python, OpenCV, and YOLO.
            </p>
          </div>

          <div className="flex-shrink-0 order-2 md:order-1 pr-4 lg:pr-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;