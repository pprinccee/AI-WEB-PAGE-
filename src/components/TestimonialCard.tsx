
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  avatar 
}) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <div className="flex flex-col h-full">
        <p className="text-gray-300 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-3 border-2 border-neon-purple/50">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-neon-purple/20 text-white">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
