-- Fix function search path for cleanup_old_sessions
DROP FUNCTION IF EXISTS cleanup_old_sessions();

CREATE OR REPLACE FUNCTION cleanup_old_sessions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.visitor_sessions
  WHERE last_seen < NOW() - INTERVAL '5 minutes';
END;
$$;