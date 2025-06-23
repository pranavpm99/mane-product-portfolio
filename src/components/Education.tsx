
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Stanford Graduate School of Business",
      year: "2018 - 2020",
      description: "Concentration in Technology and Innovation Management"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      year: "2014 - 2018",
      description: "Minor in Business Administration"
    }
  ];

  const certifications = [
    "Certified Scrum Product Owner (CSPO)",
    "Google Analytics Individual Qualification",
    "Product Management Certificate - UC Berkeley Extension",
    "AWS Cloud Practitioner"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600">Academic background and professional development</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-lg text-blue-600 font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
