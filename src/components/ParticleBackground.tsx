
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const numParticles = 50;
    
    // Remove any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;
      particle.style.animation = `particle-move ${duration}s ease-out ${delay}s infinite`;
      
      // Random color
      const colors = ['rgba(139, 92, 246, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(236, 72, 153, 0.8)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = `radial-gradient(circle at center, ${color}, transparent 70%)`;
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    ></div>
  );
};

export default ParticleBackground;
