// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mufvegfztpopgsgeuhta.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZnZlZ2Z6dHBvcGdzZ2V1aHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NzY1MzQsImV4cCI6MjA2NjI1MjUzNH0.UbaQ4A5xRJxL385x6IG3TYTQw44PzPUX5nDxgRPrrY4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);