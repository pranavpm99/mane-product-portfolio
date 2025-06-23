
import React, { useEffect, useState } from 'react';
import { supabase, CaseStudy } from '@/lib/supabase';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    // For demo purposes, using dummy data since Supabase isn't connected
    const dummyData: CaseStudy[] = [
      {
        id: 1,
        title: "E-commerce Mobile App Redesign",
        description: "Led the complete redesign of a mobile shopping app, resulting in 45% increase in conversion rates and 60% improvement in user satisfaction scores. Conducted extensive user research and A/B testing to validate design decisions.",
        category: "product",
        product: "ShopEasy",
        image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        pdf_url: "/case-study-1.pdf",
        date_uploaded: "2024-01-15",
        tags: ["UX Research", "Mobile Design", "A/B Testing", "Analytics"]
      },
      {
        id: 2,
        title: "SaaS Dashboard Analytics Platform",
        description: "Developed a comprehensive analytics dashboard for B2B customers, enabling real-time insights and custom reporting. Increased customer retention by 35% and reduced support tickets by 50% through improved self-service capabilities.",
        category: "tech",
        product: "DataInsights Pro",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        pdf_url: "/case-study-2.pdf",
        date_uploaded: "2024-02-20",
        tags: ["Data Visualization", "B2B", "Dashboard Design", "Customer Success"]
      },
      {
        id: 3,
        title: "Fintech Payment Flow Optimization",
        description: "Streamlined the payment process for a digital wallet application, reducing transaction completion time by 40% and increasing successful payment rates by 25%. Collaborated with compliance and security teams to ensure regulatory adherence.",
        category: "finance",
        product: "PaySecure",
        image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        pdf_url: "/case-study-3.pdf",
        date_uploaded: "2024-03-10",
        tags: ["Fintech", "UX Optimization", "Compliance", "Security"]
      }
    ];
    setCaseStudies(dummyData);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      product: 'bg-blue-100 text-blue-800',
      tech: 'bg-green-100 text-green-800',
      finance: 'bg-purple-100 text-purple-800',
      strategy: 'bg-orange-100 text-orange-800',
      business: 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Case Studies</h2>
          <p className="text-lg text-gray-600">Deep dives into my product management work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={study.image_url}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(study.category)}`}>
                    {study.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium">
                    {study.product}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{study.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {truncateDescription(study.description)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{study.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => window.open(study.pdf_url, '_blank')}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
