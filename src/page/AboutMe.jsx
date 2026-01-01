import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } 
from "@/components/ui/card";

const AboutMe = () => {
  const photos = [
    {id:1, src:"src/assets/slide1.webp", alt:"Photo 1"},
    {id:2, src:"src/assets/slide2.webp", alt:"Photo 2"},
    {id:3, src:"src/assets/slide3.webp", alt:"Photo 3"},
    {id:4, src:"src/assets/slide4.webp", alt:"Photo 4"},
  ]
  return (
    <section id="about" className="py-20 md:pt-8 lg:pt-12 bg-[#0F172A] relative transition-colors duration-300 overflow-hidden">
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto px-6 md:px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F8FAFC]">
          Know More
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 order-1 md:order-2">
            <p className="text-center md:text-left text-[#CBD5E1] text-lg leading-relaxed">
              A second-year Computer Science student at Universitas Brawijaya with a growing interest in Product Management, alongside a strong curiosity for front-end development.
              Experience also includes working in robotics using Python, OpenCV, and YOLO.
            </p>
          </div>

          <div className="flex-shrink-0 order-2 md:order-1">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {photos.map((photo) => (
                  <CarouselItem key={photo.id}>
                    <div className="h-72 w-80 bg-primary/20 flex items-center justify-center rounded-xl overflow-hidden">
                      <img 
                        src={photo.src} 
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;