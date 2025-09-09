import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Droplets, Wind, Leaf } from 'lucide-react';

interface EnhancedLottieIntroProps {
  onComplete: () => void;
}

const EnhancedLottieIntro = ({ onComplete }: EnhancedLottieIntroProps) => {
  const [stage, setStage] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const stages = [
      { delay: 1000, stage: 1 }, // Polluted Earth
      { delay: 2000, stage: 2 }, // Water droplet falls
      { delay: 3000, stage: 3 }, // Green transformation begins
      { delay: 4000, stage: 4 }, // Full transformation
      { delay: 5000, stage: 5 }, // Icons orbit
      { delay: 6000, stage: 6 }, // Text appears
      { delay: 8000, stage: 7 }, // Transition to homepage
    ];

    stages.forEach(({ delay, stage: stageNum }) => {
      setTimeout(() => {
        setStage(stageNum);
        if (stageNum === 6) setShowText(true);
        if (stageNum === 7) {
          setTimeout(onComplete, 1000);
        }
      }, delay);
    });
  }, [onComplete]);

  const skipIntro = () => {
    setStage(7);
    setTimeout(onComplete, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Main animation container */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
        
        {/* Polluted Earth - Stage 1 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: stage >= 1 ? 1 : 0,
            opacity: stage >= 1 && stage < 4 ? 1 : 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl"
        >
          {/* Pollution effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-900/50 to-transparent" />
          {/* Factories */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: stage >= 1 ? 0 : 10, opacity: stage >= 1 && stage < 4 ? 1 : 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="absolute w-3 h-6 bg-gray-700 rounded-t-sm"
              style={{
                left: `${30 + i * 25}%`,
                top: '20%',
              }}
            />
          ))}
        </motion.div>

        {/* Water droplet - Stage 2 */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ 
            y: stage >= 2 ? 0 : -200,
            opacity: stage >= 2 && stage < 4 ? 1 : 0
          }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute w-6 h-8 bg-blue-500 rounded-full shadow-lg"
          style={{ top: '10%' }}
        />

        {/* Clean Earth - Stage 3+ */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: stage >= 3 ? 1 : 0,
            opacity: stage >= 3 ? 1 : 0
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary shadow-hero"
        >
          {/* Continents */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/80 to-primary/60" />
          
          {/* Trees */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, y: 5 }}
              animate={{ 
                scale: stage >= 3 ? 1 : 0,
                y: stage >= 3 ? 0 : 5
              }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              className="absolute w-2 h-4 bg-secondary rounded-t-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 15}%`,
              }}
            />
          ))}

          {/* Solar panels */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ 
                scale: stage >= 4 ? 1 : 0,
                rotate: stage >= 4 ? 0 : -10
              }}
              transition={{ delay: 1 + i * 0.2 }}
              className="absolute w-3 h-2 bg-blue-600 rounded-sm"
              style={{
                right: `${20 + i * 15}%`,
                bottom: `${40 + i * 10}%`,
              }}
            />
          ))}

          {/* Wind turbines */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: stage >= 4 ? 1 : 0 }}
              transition={{ delay: 1.2 + i * 0.2 }}
              className="absolute"
              style={{
                left: `${60 + i * 20}%`,
                top: `${25 + i * 15}%`,
              }}
            >
              <div className="w-1 h-6 bg-gray-300 rounded-full" />
              <motion.div
                animate={{ rotate: stage >= 4 ? 360 : 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -left-1 w-3 h-3"
              >
                <div className="absolute w-0.5 h-2 bg-white rounded-full transform -rotate-45 origin-bottom" />
                <div className="absolute w-0.5 h-2 bg-white rounded-full transform rotate-45 origin-bottom" />
                <div className="absolute w-0.5 h-2 bg-white rounded-full transform rotate-0 origin-bottom" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Orbiting icons - Stage 5 */}
        {stage >= 5 && (
          <>
            {[
              { Icon: Sun, angle: 0, color: 'text-yellow-500' },
              { Icon: Droplets, angle: 90, color: 'text-blue-500' },
              { Icon: Wind, angle: 180, color: 'text-primary' },
              { Icon: Leaf, angle: 270, color: 'text-secondary' }
            ].map(({ Icon, angle, color }, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  rotate: stage >= 5 ? angle + 360 : angle
                }}
                transition={{ 
                  scale: { delay: 0.1 * i, duration: 0.3 },
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
                className="absolute w-12 h-12 flex items-center justify-center"
                style={{
                  transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
                }}
              >
                <div className={`p-2 rounded-xl bg-background shadow-card ${color}`}>
                  <Icon size={20} />
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Text stage 6 */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-earth bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Climate Action Starts With Us
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Small steps → Big change
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={skipIntro}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        Skip intro
      </motion.button>

      {/* Earth shrinking animation - Stage 7 */}
      {stage >= 7 && (
        <motion.div
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: 0.1, x: -200, y: -200 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnhancedLottieIntro;