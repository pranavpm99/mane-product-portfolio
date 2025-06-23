
import React, { useEffect, useState } from 'react';
import { supabase, Experience as ExperienceType } from '@/lib/supabase';

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    // For demo purposes, using dummy data since Supabase isn't connected
    const dummyData: ExperienceType[] = [
      {
        id: 1,
        title: "Senior Product Manager",
        company: "TechCorp Inc.",
        duration: "2022 - Present",
        description: "Leading product strategy for a B2B SaaS platform serving 10K+ users. Increased user engagement by 40% and reduced churn by 25% through data-driven feature development.",
        location: "San Francisco, CA",
        type: "full-time",
        order_index: 1
      },
      {
        id: 2,
        title: "Product Manager",
        company: "StartupXYZ",
        duration: "2020 - 2022",
        description: "Managed end-to-end product development for mobile application with 1M+ downloads. Successfully launched 3 major features that improved user retention by 30%.",
        location: "Remote",
        type: "full-time",
        order_index: 2
      },
      {
        id: 3,
        title: "Product Management Intern",
        company: "BigTech Solutions",
        duration: "Summer 2019",
        description: "Conducted user research and competitive analysis for new product feature. Created product specifications and worked with engineering team on implementation.",
        location: "Seattle, WA",
        type: "internship",
        order_index: 3
      }
    ];
    setExperiences(dummyData);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">My journey in product management</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-500 mt-2 lg:mt-0">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                    exp.type === 'full-time' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
