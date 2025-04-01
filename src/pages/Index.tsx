
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import MagicOrb from '@/components/MagicOrb';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Calendar, Users, BarChart3, Pin } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollSections = document.querySelectorAll('.scroll-section');
      scrollSections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollPosition > sectionTop - window.innerHeight / 1.5 && scrollPosition < sectionTop + sectionHeight) {
          section.classList.add('animate-slide-right');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <div className="min-h-screen bg-[#050A1C] overflow-x-hidden">
      <Navbar />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Manage College Events with Magic
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Organize and streamline campus events like never before
            </p>
            <Button className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity text-white font-medium rounded-full px-8 py-6 text-lg transform rotate-2 shadow-lg relative">
              <Pin className="absolute -top-1 -left-1 text-neon-pink" size={16} />
              Get Started
            </Button>
          </div>
          
          <div className="relative">
            <MagicOrb />
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-3xl mx-auto">
              <div className="glass-card rounded-lg p-4 text-center animate-float transform rotate-1" style={{
              animationDelay: '0.2s'
            }}>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <p className="text-white text-sm md:text-base font-medium">Event Planner</p>
              </div>
              
              <div className="glass-card rounded-lg p-4 text-center animate-float transform -rotate-2" style={{
              animationDelay: '0.4s'
            }}>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>
                <p className="text-white text-sm md:text-base font-medium">Role Based Dashboard</p>
              </div>
              
              <div className="glass-card rounded-lg p-4 text-center animate-float transform rotate-2" style={{
              animationDelay: '0.6s'
            }}>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-pink-500/20 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
                </div>
                <p className="text-white text-sm md:text-base font-medium">Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Bulletin Board Style */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative inline-block">
              <span className="absolute -top-2 -left-2">
                <Pin className="text-neon-purple" size={20} />
              </span>
              Campus <span className="text-gradient">Features</span>
              <span className="absolute -top-2 -right-2">
                <Pin className="text-neon-blue" size={20} />
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              Pinned to our virtual bulletin board - tools that make campus life better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-section opacity-0">
            <div className="relative transform rotate-1">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Pin className="text-neon-purple" size={24} />
              </span>
              <FeatureCard 
                title="Event Planning" 
                description="Easily create, schedule, and manage multiple events with our intuitive calendar interface. Set reminders and track event milestones." 
                icon={<Calendar className="w-8 h-8 text-white" />} 
                color="bg-blue-500/20" 
              />
            </div>
            
            <div className="relative transform -rotate-2">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Pin className="text-neon-blue" size={24} />
              </span>
              <FeatureCard 
                title="Role-Based Dashboard" 
                description="Customize access for organizers, club admins, and attendees. Each role has its own tailored dashboard with relevant tools and information." 
                icon={<Users className="w-8 h-8 text-white" />} 
                color="bg-purple-500/20" 
              />
            </div>
            
            <div className="relative transform rotate-1">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Pin className="text-neon-pink" size={24} />
              </span>
              <FeatureCard 
                title="Real-time Analytics" 
                description="Gain insights into attendance patterns, ticket sales, and engagement metrics to optimize your future events." 
                icon={<BarChart3 className="w-8 h-8 text-white" />} 
                color="bg-pink-500/20" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section - Bulletin Board Style */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="scroll-section opacity-0 relative transform rotate-1 p-8">
              <span className="absolute -top-3 left-10">
                <Pin className="text-neon-purple" size={24} />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Revolutionize Your <span className="text-gradient">Campus Events</span>
              </h2>
              <p className="text-gray-300 mb-6">
                HyperCampus was created by students who understood the challenges of organizing campus events. Our platform simplifies every aspect of event management, from planning to execution.
              </p>
              <p className="text-gray-300 mb-8">
                With innovative features and a magical user experience, we're transforming how colleges handle events, making the process more efficient and enjoyable for everyone involved.
              </p>
              <Button className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity text-white font-medium rounded-full px-6 transform -rotate-1 relative">
                <Pin className="absolute -top-1 -left-1 text-neon-pink" size={16} />
                Learn More
              </Button>
            </div>
            
            <div className="relative h-80 md:h-96 glass-card rounded-xl overflow-hidden scroll-section opacity-0 transform -rotate-1">
              <span className="absolute -top-3 right-10 z-10">
                <Pin className="text-neon-blue" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 to-transparent"></div>
              <MagicOrb />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Bulletin Board Style */}
      <section id="testimonials" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative inline-block">
              <span className="absolute -top-2 -left-2">
                <Pin className="text-neon-pink" size={20} />
              </span>
              Student <span className="text-gradient">Testimonials</span>
              <span className="absolute -top-2 -right-2">
                <Pin className="text-neon-purple" size={20} />
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              Pinned notes from students who experienced the magic
            </p>
          </div>
          
          <div className="relative transform rotate-1">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <Pin className="text-neon-blue" size={24} />
            </span>
            <TestimonialCarousel />
          </div>
        </div>
      </section>
      
      {/* CTA Section - Bulletin Board Style */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden transform -rotate-1">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <Pin className="text-neon-pink" size={28} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-neon-blue/20 to-neon-pink/30 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Campus Events?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of student organizations already using HyperCampus to create magical event experiences.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-neon-purple font-medium rounded-full px-8 py-6 text-lg transform rotate-2">
                <Pin className="absolute -top-1 -left-1 text-neon-blue" size={16} />
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;
