import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, a } from '@react-spring/web';
import { Button } from "@/components/ui/button";
import adamPDF from '@/assets/adampdf.pdf';
import OperationTheaters from '@/assets/operation-theater.jpg'
import heromedical from '@/assets/hero-medical.jpg';
import ModularTheatreSystems from '@/assets/modular-theatre-systems.jpg';

const slides = [
  {
    id: 1,
    imageSrc: ModularTheatreSystems,
    title: 'Modular MED Solutions',
    subtitle: 'Pakistan\'s Premier Medical Infrastructure Company'
  },
  {
    id: 2,
    imageSrc: OperationTheaters,
    title: 'Transforming Healthcare',
    subtitle: 'World-class modular operation theaters, clean rooms, and laboratory solutions'
  },
  {
    id: 3,
    imageSrc: heromedical,
    title: 'Excellence Since 2021',
    subtitle: 'ISO Certified · Fast Delivery · Premium Grade Materials · No Quality Compromise Since 4 Years'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const parallaxProps = useSpring({
    transform: `translateY(${scrollY * 0.3}px)`,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const textFloatProps = useSpring({
    transform: `translateY(${-scrollY * 0.2}px)`,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollPos = Math.max(0, -rect.top);
        setScrollY(scrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = adamPDF;
    link.download = 'adampdf.pdf';
    link.click();
  };

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <animated.div
            style={{
              backgroundImage: `url(${slide.imageSrc})`,
              filter: 'contrast(1.1) brightness(0.9)',
              transform: currentSlide === index ? parallaxProps.transform : 'none'
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
          />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20">
            <animated.div style={currentSlide === index ? textFloatProps : {}}>
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-700 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.6)' }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto transition-all duration-700 delay-300 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex flex-col mt-8 sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <Link to="/products-services">
                  <Button size="lg" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform">
                    Explore Our Solutions
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={downloadPDF}
                  className="border-2 border-white-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Download Brochure
                </Button>
              </div>
            </animated.div>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-150 shadow-lg' : 'bg-white/50 hover:bg-white/80 hover:scale-125'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <animated.div
        style={useSpring({
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
          delay: 800,
          config: { tension: 120, friction: 14 }
        })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/70 flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[slide-down_1.5s_ease-in-out_infinite]" />
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;