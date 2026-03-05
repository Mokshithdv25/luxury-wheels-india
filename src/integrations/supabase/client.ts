import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Read Supabase credentials from Vite env vars.
// These must be set in both local `.env` and Vercel project settings.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});