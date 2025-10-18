-- Create visitor statistics table
CREATE TABLE IF NOT EXISTS public.visitor_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_visitors INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create visitor sessions table to track active visitors
CREATE TABLE IF NOT EXISTS public.visitor_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL UNIQUE,
  last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_sessions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read visitor stats
CREATE POLICY "Anyone can read visitor stats"
  ON public.visitor_stats
  FOR SELECT
  USING (true);

-- Allow anyone to read active sessions
CREATE POLICY "Anyone can read visitor sessions"
  ON public.visitor_sessions
  FOR SELECT
  USING (true);

-- Allow anyone to insert/update visitor stats
CREATE POLICY "Anyone can update visitor stats"
  ON public.visitor_stats
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Allow anyone to insert/update sessions
CREATE POLICY "Anyone can manage sessions"
  ON public.visitor_sessions
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Insert initial visitor stats record
INSERT INTO public.visitor_stats (total_visitors) VALUES (0);

-- Create index for faster session lookups
CREATE INDEX idx_visitor_sessions_last_seen ON public.visitor_sessions(last_seen DESC);
CREATE INDEX idx_visitor_sessions_session_id ON public.visitor_sessions(session_id);

-- Function to cleanup old sessions (older than 5 minutes)
CREATE OR REPLACE FUNCTION cleanup_old_sessions()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM public.visitor_sessions
  WHERE last_seen < NOW() - INTERVAL '5 minutes';
END;
$$;