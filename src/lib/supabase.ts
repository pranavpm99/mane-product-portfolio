
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for our database tables
export interface PersonalInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
  linkedin_url: string;
  github_url: string;
  image_url: string;
  tagline: string;
  bio: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  location: string;
  type: 'full-time' | 'internship';
  order_index: number;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: 'product' | 'finance' | 'strategy' | 'business' | 'tech';
  product: string;
  image_url: string;
  pdf_url: string;
  date_uploaded: string;
  tags: string[];
}

export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  image_url: string;
  upload_date: string;
  read_time: number;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
