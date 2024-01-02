import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServerKey: string = process.env.NEXT_PUBLIC_SERVICE_KEY || '';

// Supabase client
const supabase = createClient(supabaseUrl, supabaseServerKey);

export {supabase}