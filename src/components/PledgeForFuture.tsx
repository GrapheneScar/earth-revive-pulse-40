import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const PledgeForFuture = () => {
  const [pledged, setPledged] = useState(false);
  const [progress, setProgress] = useState(0);

  const pledgeItems = [
    { emoji: '🌱', text: 'Save Trees' },
    { emoji: '💧', text: 'Conserve Water' },
    { emoji: '🔋', text: 'Reduce Energy Usage' },
    { emoji: '♻️', text: 'Recycle & Reuse' },
    { emoji: '🚶', text: 'Walk or Bike More' }
  ];

  const handlePledge = () => {
    setPledged(true);
    setProgress(100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="h-full p-6 sm:p-8 text-center shadow-card border-none bg-gradient-to-br from-primary/5 to-background hover-lift relative overflow-hidden border-t-4 border-t-primary flex flex-col">
        {/* Animated shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <motion.h2 
            className="text-xl sm:text-2xl font-bold mb-4 text-primary"
            animate={{
              textShadow: [
                "0 0 0px hsl(var(--primary) / 0)", 
                "0 0 10px hsl(var(--primary) / 0.3)", 
                "0 0 0px hsl(var(--primary) / 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            🌿 Pledge for a Greener Future
          </motion.h2>
          
          <div className="space-y-2 mb-6">
            {pledgeItems.map((item, index) => (
              <motion.p
                key={index}
                className="text-sm sm:text-base font-semibold text-primary flex items-center justify-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="text-lg">{item.emoji}</span>
                {item.text}
              </motion.p>
            ))}
          </div>
          
          <motion.p 
            className="text-base sm:text-lg font-semibold text-primary mb-4"
            animate={{ opacity: pledged ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {pledged ? '' : 'Every pledge makes a difference!'}
          </motion.p>
          
          {pledged && (
            <motion.p
              className="text-base sm:text-lg font-semibold text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your pledge matters! 🌎
            </motion.p>
          )}
          
          <div className="mb-6">
            <Progress 
              value={progress} 
              className="h-3 bg-muted"
            />
          </div>
          
          <Button
            onClick={handlePledge}
            disabled={pledged}
            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {pledged ? '✓ Pledged' : 'I Pledge 🌍'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PledgeForFuture;