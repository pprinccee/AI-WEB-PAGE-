
import React from 'react';
import { Pin } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 relative">
      <div className="h-8 w-8 bg-gradient-to-r from-neon-purple to-neon-blue rounded flex items-center justify-center text-white font-bold text-lg transform rotate-3 relative">
        <span className="absolute -top-1 -left-1">
          <Pin className="text-neon-pink" size={16} />
        </span>
        H
      </div>
      <span className="text-white font-bold text-xl transform -rotate-1">HyperCampus</span>
    </div>
  );
};

export default Logo;
