// Supabase CDN is already loaded in HTML
const SUPABASE_URL = "https://giekbwvblhzzllcrmyud.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_7HV8Fi3n0_kbVWXX4ZTDxQ_OXCrAfzB";

window.supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
