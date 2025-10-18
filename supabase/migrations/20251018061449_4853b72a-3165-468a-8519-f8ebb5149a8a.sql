-- Fix visitor_sessions RLS policies
-- Drop ALL existing policies on visitor_sessions
DROP POLICY IF EXISTS "Anyone can manage sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Anyone can read visitor sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Service role can manage sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "No public access to sessions" ON public.visitor_sessions;

-- Create a function to get session count (for reading only aggregate data)
CREATE OR REPLACE FUNCTION public.get_active_visitor_count()
RETURNS INTEGER
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::INTEGER
  FROM public.visitor_sessions
  WHERE last_seen > NOW() - INTERVAL '5 minutes';
$$;

-- Create a function to manage visitor sessions securely
CREATE OR REPLACE FUNCTION public.upsert_visitor_session(
  p_session_id TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.visitor_sessions (session_id, last_seen)
  VALUES (p_session_id, NOW())
  ON CONFLICT (session_id)
  DO UPDATE SET last_seen = NOW();
END;
$$;

-- Create restricted RLS policies for visitor_sessions
-- Allow only service role to manage sessions directly
CREATE POLICY "Service role can manage sessions"
ON public.visitor_sessions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Public users cannot read individual sessions
CREATE POLICY "No public access to sessions"
ON public.visitor_sessions
FOR SELECT
TO public
USING (false);

-- Fix visitor_stats RLS policies
-- Drop ALL existing policies on visitor_stats
DROP POLICY IF EXISTS "Anyone can update visitor stats" ON public.visitor_stats;
DROP POLICY IF EXISTS "Anyone can read visitor stats" ON public.visitor_stats;
DROP POLICY IF EXISTS "Service role can update stats" ON public.visitor_stats;

-- Only allow reading stats for public
CREATE POLICY "Public can read visitor stats"
ON public.visitor_stats
FOR SELECT
TO public
USING (true);

-- Only service role can update stats
CREATE POLICY "Service role manages stats"
ON public.visitor_stats
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);