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

        // Clean up old sessions using secure RPC
        await supabase.rpc('cleanup_old_sessions');

        // Upsert session using secure RPC function
        await supabase.rpc('upsert_visitor_session', { p_session_id: sessionId });

        // Fetch current stats with simulated growth for total
        const fetchStats = async () => {
          // Get base total visitors from database
          const { data: stats } = await supabase
            .from('visitor_stats')
            .select('total_visitors, updated_at')
            .limit(1)
            .maybeSingle();

          if (stats) {
            // Calculate simulated growth based on time passed
            const lastUpdate = new Date(stats.updated_at);
            const now = new Date();
            const daysPassed = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24));
            
            // Add 5-12 visitors per day that passed
            const dailyGrowth = daysPassed * (5 + Math.floor(Math.random() * 8));
            const displayTotal = stats.total_visitors + dailyGrowth;
            
            setTotalVisitors(displayTotal);
          }

          // Get REAL active visitors count using secure function
          const { data: activeCount } = await supabase.rpc('get_active_visitor_count');
          setVisitors(activeCount || 0);
        };

        await fetchStats();
        setIsLoading(false);

        // Update last_seen every 30 seconds using secure RPC
        const updateInterval = setInterval(async () => {
          await supabase.rpc('upsert_visitor_session', { p_session_id: sessionId });
        }, 30000);

        // Refresh stats every 15 seconds
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