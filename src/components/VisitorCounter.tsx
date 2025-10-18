import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Eye, TrendingUp, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initVisitorTracking = async () => {
      try {
        // Generate or get session ID
        let sessionId = sessionStorage.getItem('visitor-session-id');
        if (!sessionId) {
          sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          sessionStorage.setItem('visitor-session-id', sessionId);
        }

        // Clean up old sessions first
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
        await supabase
          .from('visitor_sessions')
          .delete()
          .lt('last_seen', fiveMinutesAgo);

        // Check if this session exists
        const { data: existingSession } = await supabase
          .from('visitor_sessions')
          .select('id')
          .eq('session_id', sessionId)
          .maybeSingle();

        const isNewVisitor = !existingSession;

        // Upsert session (create or update)
        await supabase
          .from('visitor_sessions')
          .upsert({
            session_id: sessionId,
            last_seen: new Date().toISOString()
          }, {
            onConflict: 'session_id'
          });

        // If new visitor, increment total count
        if (isNewVisitor) {
          const { data: stats } = await supabase
            .from('visitor_stats')
            .select('total_visitors')
            .limit(1)
            .single();

          if (stats) {
            await supabase
              .from('visitor_stats')
              .update({ 
                total_visitors: stats.total_visitors + 1,
                updated_at: new Date().toISOString()
              })
              .eq('id', (await supabase.from('visitor_stats').select('id').limit(1).single()).data?.id);
          }
        }

        // Fetch current stats
        const fetchStats = async () => {
          // Get total visitors
          const { data: stats } = await supabase
            .from('visitor_stats')
            .select('total_visitors')
            .limit(1)
            .maybeSingle();

          if (stats) {
            setTotalVisitors(stats.total_visitors);
          }

          // Get active visitors (sessions in last 5 minutes)
          const { data: activeSessions, count } = await supabase
            .from('visitor_sessions')
            .select('*', { count: 'exact', head: true })
            .gte('last_seen', fiveMinutesAgo);

          setVisitors(count || 0);
        };

        await fetchStats();
        setIsLoading(false);

        // Update last_seen every 30 seconds
        const updateInterval = setInterval(async () => {
          await supabase
            .from('visitor_sessions')
            .update({ last_seen: new Date().toISOString() })
            .eq('session_id', sessionId);

          // Refresh stats
          await fetchStats();
        }, 30000);

        // Refresh active visitors count more frequently
        const refreshInterval = setInterval(fetchStats, 15000);

        return () => {
          clearInterval(updateInterval);
          clearInterval(refreshInterval);
        };
      } catch (error) {
        console.error('Error tracking visitors:', error);
        setIsLoading(false);
      }
    };

    const cleanup = initVisitorTracking();
    return () => {
      cleanup.then(cleanupFn => cleanupFn && cleanupFn());
    };
  }, []);

  // Animate number changes
  const animateCounter = (value: number) => {
    return {
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 right-4 z-40 pointer-events-none"
    >
      <Card className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-lg">
        <div className="p-3 space-y-2">
          {/* Live Visitors */}
          <div className="flex items-center gap-2 text-sm">
            <div className="relative">
              <Eye className="w-4 h-4 text-green-500" />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="text-muted-foreground">Live:</span>
            {!isLoading && (
              <motion.span 
                className="font-bold text-green-500"
                animate={animateCounter(visitors)}
                key={visitors}
              >
                {visitors}
              </motion.span>
            )}
            {isLoading && (
              <div className="w-6 h-4 bg-muted animate-pulse rounded" />
            )}
          </div>

          {/* Total Visitors */}
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Total:</span>
            {!isLoading && (
              <motion.span 
                className="font-bold text-primary"
                animate={animateCounter(totalVisitors)}
                key={totalVisitors}
              >
                {totalVisitors.toLocaleString()}
              </motion.span>
            )}
            {isLoading && (
              <div className="w-12 h-4 bg-muted animate-pulse rounded" />
            )}
          </div>

          {/* Growth Indicator */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span>Growing daily</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default VisitorCounter;