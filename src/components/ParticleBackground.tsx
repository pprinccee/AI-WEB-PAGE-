
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  element: HTMLDivElement;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const numParticles = 75;
    const bounds = container.getBoundingClientRect();
    
    // Remove any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    particles.current = [];
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * bounds.width;
      const y = Math.random() * bounds.height;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.position = 'absolute';
      
      // Random velocity
      const vx = (Math.random() - 0.5) * 1;
      const vy = (Math.random() - 0.5) * 1;
      
      // Random color
      const colors = ['rgba(139, 92, 246, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(236, 72, 153, 0.8)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = `radial-gradient(circle at center, ${color}, transparent 70%)`;
      particle.style.opacity = '0';
      particle.style.transition = 'opacity 0.5s ease-in';
      
      // Store particle properties
      particles.current.push({
        x,
        y,
        size,
        color,
        vx,
        vy,
        element: particle
      });
      
      container.appendChild(particle);
      
      // Fade in particles
      setTimeout(() => {
        particle.style.opacity = '1';
      }, i * 20);
    }
    
    // Mouse move event handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    // Animation loop
    const animate = () => {
      particles.current.forEach((p) => {
        // Calculate distance from mouse
        const dx = p.x - mousePosition.x;
        const dy = p.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If mouse is close, push particles away
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100; // Stronger when closer
          
          // Apply force away from mouse
          p.vx += Math.cos(angle) * force * 0.5;
          p.vy += Math.sin(angle) * force * 0.5;
        }
        
        // Update velocity with slight dampening
        p.vx *= 0.98;
        p.vy *= 0.98;
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Add subtle random movement
        p.x += (Math.random() - 0.5) * 0.3;
        p.y += (Math.random() - 0.5) * 0.3;
        
        // Boundary checking - bounce off walls with dampening
        const bounds = container.getBoundingClientRect();
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -0.5;
        } else if (p.x > bounds.width) {
          p.x = bounds.width;
          p.vx *= -0.5;
        }
        
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -0.5;
        } else if (p.y > bounds.height) {
          p.y = bounds.height;
          p.vy *= -0.5;
        }
        
        // Update particle element position
        p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
        p.element.style.left = '0';
        p.element.style.top = '0';
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Start animation and add event listener
    animate();
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    ></div>
  );
};

export default ParticleBackground;
