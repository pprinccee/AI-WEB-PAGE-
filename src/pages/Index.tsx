
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import MagicOrb from '@/components/MagicOrb';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Calendar, Users, BarChart3 } from 'lucide-react';

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
            <Button className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity text-white font-medium rounded-full px-8 py-6 text-lg">
              Get Started
            </Button>
          </div>
          
          <div className="relative">
            <MagicOrb />
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-3xl mx-auto">
              <div className="glass-card rounded-lg p-4 text-center animate-float" style={{
              animationDelay: '0.2s'
            }}>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <p className="text-white text-sm md:text-base font-medium">Event Planner</p>
              </div>
              
              <div className="glass-card rounded-lg p-4 text-center animate-float" style={{
              animationDelay: '0.4s'
            }}>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>
                <p className="text-white text-sm md:text-base font-medium">Role Based Dashboard</p>
              </div>
              
              <div className="glass-card rounded-lg p-4 text-center animate-float" style={{
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
      
      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Magical <span className="text-gradient">Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the tools that make campus event management effortless and engaging
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-section opacity-0">
            <FeatureCard title="Event Planning" description="Easily create, schedule, and manage multiple events with our intuitive calendar interface. Set reminders and track event milestones." icon={<Calendar className="w-8 h-8 text-white" />} color="bg-blue-500/20" />
            
            <FeatureCard title="Role-Based Dashboard" description="Customize access for organizers, club admins, and attendees. Each role has its own tailored dashboard with relevant tools and information." icon={<Users className="w-8 h-8 text-white" />} color="bg-purple-500/20" />
            
            <FeatureCard title="Real-time Analytics" description="Gain insights into attendance patterns, ticket sales, and engagement metrics to optimize your future events." icon={<BarChart3 className="w-8 h-8 text-white" />} color="bg-pink-500/20" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="scroll-section opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Revolutionize Your <span className="text-gradient">Campus Events</span>
              </h2>
              <p className="text-gray-300 mb-6">
                HyperCampus was created by students who understood the challenges of organizing campus events. Our platform simplifies every aspect of event management, from planning to execution.
              </p>
              <p className="text-gray-300 mb-8">
                With innovative features and a magical user experience, we're transforming how colleges handle events, making the process more efficient and enjoyable for everyone involved.
              </p>
              <Button className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity text-white font-medium rounded-full px-6">
                Learn More
              </Button>
            </div>
            
            <div className="relative h-80 md:h-96 glass-card rounded-xl overflow-hidden scroll-section opacity-0">
              <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 to-transparent"></div>
              <MagicOrb />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What People Are <span className="text-gradient">Saying</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from students and event organizers who have experienced the magic
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 via-neon-blue/20 to-neon-pink/30 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Campus Events?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of student organizations already using HyperCampus to create magical event experiences.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-neon-purple font-medium rounded-full px-8 py-6 text-lg">
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">HyperCampus</h3>
              <p className="text-gray-400">
                The magical way to manage college events.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Role-Based Dashboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Promotion Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2023 HyperCampus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
