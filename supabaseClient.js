import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cfg = window.__APP_CONFIG__ || {};
const supabaseUrl = cfg.SUPABASE_URL || "";
const supabaseAnonKey = cfg.SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.error("Supabase config missing. Check env.js generation.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

