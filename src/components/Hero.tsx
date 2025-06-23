
import React, { useEffect, useState } from 'react';
import { supabase, PersonalInfo } from '@/lib/supabase';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    fetchPersonalInfo();
  }, []);

  const fetchPersonalInfo = async () => {
    // For demo purposes, using dummy data since Supabase isn't connected
    const dummyData: PersonalInfo = {
      id: 1,
      name: "Pranav Mane",
      email: "pranav.mane@email.com",
      phone: "+1 (555) 123-4567",
      linkedin_url: "https://linkedin.com/in/pranavmane",
      github_url: "https://github.com/pranavmane",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      tagline: "Product Enthusiast & Problem Solver",
      bio: "Passionate product manager with 5+ years of experience building user-centric solutions that drive business growth. I specialize in transforming complex problems into intuitive products that users love."
    };
    setPersonalInfo(dummyData);
  };

  if (!personalInfo) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-600 font-medium mb-8">
              {personalInfo.tagline}
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
              <a href={`tel:${personalInfo.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={24} />
              </a>
              <a href={personalInfo.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={personalInfo.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={personalInfo.image_url}
                alt={personalInfo.name}
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
