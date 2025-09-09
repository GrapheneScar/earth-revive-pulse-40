import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import earthAnimation from '@/data/earthAnimation.json';

interface LottieIntroProps {
  onComplete: () => void;
}

const LottieIntro = ({ onComplete }: LottieIntroProps) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Auto-complete after 6 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setTimeout(onComplete, 500);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setTimeout(onComplete, 500);
  };

  if (!showAnimation) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10 overflow-hidden"
    >
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-earth rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Animation Container */}
      <motion.div 
        className="relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        <motion.div 
          className="w-80 h-80 md:w-96 md:h-96 relative"
          animate={{
            filter: [
              "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))",
              "drop-shadow(0 0 40px hsl(var(--primary) / 0.6))",
              "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lottie
            animationData={earthAnimation}
            loop={false}
            onComplete={handleAnimationComplete}
            className="w-full h-full"
          />
          
          {/* Orbiting Elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-nature rounded-full"
                style={{
                  top: "10%",
                  left: "50%",
                  transformOrigin: "0 200px",
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Text */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: "backOut" }}
        className="text-center mt-8 relative z-10"
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-earth bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          style={{ backgroundSize: "200% 200%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Climate Action Project
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground text-base md:text-lg font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Building a sustainable future together
        </motion.p>

        {/* Loading Progress */}
        <motion.div
          className="w-64 h-1 bg-border rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-earth"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 2.2, duration: 3.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Skip Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleAnimationComplete}
          className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 border border-border/50 rounded-full hover:border-primary/50 hover:bg-primary/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip intro
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default LottieIntro;