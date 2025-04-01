
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "HyperCampus transformed how we manage events. It's like magic!",
    name: "Sarah M.",
    role: "Student Coordinator",
    avatar: "https://i.pravatar.cc/150?img=31"
  },
  {
    quote: "Our campus festivals are now easier to organize. The ticketing system is seamless!",
    name: "James K.",
    role: "Event Director",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The analytics helped us understand what our students really want from campus events.",
    name: "Priya T.",
    role: "Student Union President",
    avatar: "https://i.pravatar.cc/150?img=22"
  },
  {
    quote: "Planning multiple events simultaneously has never been this easy before.",
    name: "Michael J.",
    role: "Activities Coordinator",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-neon-purple' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button 
        className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
        onClick={nextSlide}
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
