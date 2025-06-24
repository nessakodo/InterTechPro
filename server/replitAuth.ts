import { createClient } from '@supabase/supabase-js';
import type { Express, RequestHandler } from 'express';

// Initialize Supabase client with env vars
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Middleware to check Supabase JWT in Authorization header
export const isAuthenticated: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = authHeader.replace('Bearer ', '');
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.user = data.user;
  next();
};

// Setup auth routes for login, signup, and logout (handled on client)
export async function setupAuth(app: Express) {
  // No-op for server, as Supabase handles auth on the client
  // Optionally, you can add server-side endpoints for user info, etc.
}
