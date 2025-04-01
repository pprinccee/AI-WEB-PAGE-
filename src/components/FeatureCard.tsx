
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  color
}) => {
  return (
    <div className="feature-card h-64 w-full max-w-sm mx-auto">
      <div className="feature-card-inner relative h-full w-full">
        {/* Front side */}
        <div className="feature-card-front absolute inset-0 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className={`w-16 h-16 mb-4 rounded-lg flex items-center justify-center ${color} neon-glow`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        </div>
        
        {/* Back side */}
        <div className="feature-card-back absolute inset-0 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
