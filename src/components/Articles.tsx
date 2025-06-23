
import React, { useEffect, useState } from 'react';
import { supabase, Article } from '@/lib/supabase';

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    // For demo purposes, using dummy data since Supabase isn't connected
    const dummyData: Article[] = [
      {
        id: 1,
        title: "The Art of Product Discovery: Finding What Users Really Need",
        description: "Exploring effective techniques for product discovery, from user interviews to data analysis, and how to validate assumptions before building features.",
        content: "Full article content would go here...",
        image_url: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
        upload_date: "2024-01-20",
        read_time: 5
      },
      {
        id: 2,
        title: "Building Product Roadmaps That Actually Drive Results",
        description: "A comprehensive guide to creating product roadmaps that align with business goals while maintaining flexibility for changing market conditions.",
        content: "Full article content would go here...",
        image_url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
        upload_date: "2024-02-15",
        read_time: 7
      },
      {
        id: 3,
        title: "The Future of Product Management: AI and Beyond",
        description: "How artificial intelligence and emerging technologies are reshaping the product management landscape and what it means for PMs.",
        content: "Full article content would go here...",
        image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        upload_date: "2024-03-05",
        read_time: 6
      }
    ];
    setArticles(dummyData);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Articles</h2>
          <p className="text-lg text-gray-600">Insights and thoughts on product management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{formatDate(article.upload_date)}</span>
                  <span className="mx-2">•</span>
                  <span>{article.read_time} min read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read Full Article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
