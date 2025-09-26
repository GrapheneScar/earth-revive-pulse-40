import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Eye, TrendingUp, Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize visitor counting
    const initVisitorCount = () => {
      // Get stored total visitors with more realistic base
      const stored = localStorage.getItem('climate-total-visitors');
      const lastVisit = localStorage.getItem('climate-last-visit');
      const currentTime = Date.now();
      
      let baseVisitors = stored ? parseInt(stored, 10) : 2847; // More realistic starting number
      
      // Simulate organic growth over time
      if (lastVisit) {
        const timeDiff = currentTime - parseInt(lastVisit, 10);
        const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        // Add 3-8 visitors per day that passed
        const organicGrowth = Math.floor(daysPassed * (3 + Math.random() * 5));
        baseVisitors += organicGrowth;
      }
      
      // Check if this is a new session (more realistic session tracking)
      const sessionKey = `climate-session-${new Date().toDateString()}`;
      const sessionVisitor = sessionStorage.getItem(sessionKey);
      
      if (!sessionVisitor) {
        // New unique session today - increment total visitors
        baseVisitors += 1;
        localStorage.setItem('climate-total-visitors', baseVisitors.toString());
        localStorage.setItem('climate-last-visit', currentTime.toString());
        sessionStorage.setItem(sessionKey, 'true');
        setTotalVisitors(baseVisitors);
      } else {
        setTotalVisitors(baseVisitors);
      }

      // More realistic concurrent visitors based on time of day
      const hour = new Date().getHours();
      let baseCurrentVisitors;
      if (hour >= 9 && hour <= 17) {
        // Peak hours: 2-12 concurrent visitors
        baseCurrentVisitors = 2 + Math.floor(Math.random() * 11);
      } else if (hour >= 18 && hour <= 22) {
        // Evening: 1-8 visitors
        baseCurrentVisitors = 1 + Math.floor(Math.random() * 8);
      } else {
        // Night/early morning: 1-4 visitors
        baseCurrentVisitors = 1 + Math.floor(Math.random() * 4);
      }
      
      setVisitors(baseCurrentVisitors);
      setIsLoading(false);

      // More realistic visitor fluctuation
      const interval = setInterval(() => {
        const currentHour = new Date().getHours();
        let maxVisitors, minVisitors;
        
        if (currentHour >= 9 && currentHour <= 17) {
          maxVisitors = 12;
          minVisitors = 2;
        } else if (currentHour >= 18 && currentHour <= 22) {
          maxVisitors = 8;
          minVisitors = 1;
        } else {
          maxVisitors = 4;
          minVisitors = 1;
        }
        
        setVisitors(prev => {
          // Natural fluctuation with occasional spikes
          const shouldSpike = Math.random() < 0.1; // 10% chance of spike
          if (shouldSpike) {
            return Math.min(maxVisitors, prev + Math.floor(Math.random() * 3) + 2);
          }
          
          const variance = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
          return Math.max(minVisitors, Math.min(maxVisitors, prev + variance));
        });
      }, 12000 + Math.random() * 18000); // Every 12-30 seconds

      return () => clearInterval(interval);
    };

    const cleanup = initVisitorCount();
    return cleanup;
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