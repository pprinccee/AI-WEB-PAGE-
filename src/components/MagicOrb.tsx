
import React from 'react';

const MagicOrb = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto animate-float">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full magic-circle animate-pulse-glow"></div>
      
      {/* Orb */}
      <div className="relative h-full w-full rounded-full overflow-hidden glass-card neon-border animate-pulse-glow">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/40 to-transparent opacity-70"></div>
        
        {/* Particles inside orb */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border border-neon-purple/30 rounded-full animate-rotate-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border border-neon-blue/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
    </div>
  );
};

export default MagicOrb;
