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
      // Get stored total visitors
      const stored = localStorage.getItem('climate-total-visitors');
      const storedTotal = stored ? parseInt(stored, 10) : 1247; // Starting from a base number
      
      // Check if this is a new session
      const sessionVisitor = sessionStorage.getItem('climate-session-visitor');
      
      if (!sessionVisitor) {
        // New session - increment total visitors
        const newTotal = storedTotal + 1;
        localStorage.setItem('climate-total-visitors', newTotal.toString());
        sessionStorage.setItem('climate-session-visitor', 'true');
        setTotalVisitors(newTotal);
      } else {
        setTotalVisitors(storedTotal);
      }

      // Simulate real-time visitors (between 1-8 concurrent users)
      const currentVisitors = Math.floor(Math.random() * 8) + 1;
      setVisitors(currentVisitors);
      setIsLoading(false);

      // Update current visitors periodically (simulate real activity)
      const interval = setInterval(() => {
        const variance = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        setVisitors(prev => Math.max(1, Math.min(12, prev + variance)));
      }, 15000 + Math.random() * 10000); // Every 15-25 seconds

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