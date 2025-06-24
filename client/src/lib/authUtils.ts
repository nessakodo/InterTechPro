import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be set in your .env as VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function isUnauthorizedError(error: Error): boolean {
  // Supabase returns 401 Unauthorized errors with this message
  return error.message.includes("Unauthorized") || error.message.includes("401");
}

export async function login(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signup(email: string, password: string, options?: any) {
  return supabase.auth.signUp({ email, password, ...options });
}

export async function logout() {
  return supabase.auth.signOut();
}