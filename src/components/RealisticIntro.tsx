import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Droplets, Zap, Wind, Sun, TreePine, Recycle, Globe } from 'lucide-react';
import Earth3D from '@/components/Earth3D';

interface RealisticIntroProps {
  onComplete: () => void;
}

const RealisticIntro = ({ onComplete }: RealisticIntroProps) => {
  const [stage, setStage] = useState(0);
  const [showText, setShowText] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
    }));
    setParticles(particleArray);

    const stages = [
      { delay: 500, stage: 1 },   // Earth appears with pollution
      { delay: 1500, stage: 2 },  // Climate effects begin
      { delay: 2500, stage: 3 },  // Renewable energy appears
      { delay: 3500, stage: 4 },  // Nature restoration
      { delay: 4500, stage: 5 },  // Technology integration
      { delay: 5500, stage: 6 },  // Global connections
      { delay: 6500, stage: 7 },  // Text and call to action
      { delay: 9000, stage: 8 },  // Transition to main site
    ];

    stages.forEach(({ delay, stage: stageNum }) => {
      setTimeout(() => {
        setStage(stageNum);
        if (stageNum === 7) setShowText(true);
        if (stageNum === 8) {
          setTimeout(onComplete, 1000);
        }
      }, delay);
    });
  }, [onComplete]);

  const skipIntro = () => {
    setStage(8);
    setTimeout(onComplete, 500);
  };

  const iconElements = [
    { Icon: Leaf, color: 'text-primary', size: 24 },
    { Icon: Droplets, color: 'text-blue-400', size: 20 },
    { Icon: Wind, color: 'text-cyan-400', size: 22 },
    { Icon: Sun, color: 'text-yellow-400', size: 26 },
    { Icon: TreePine, color: 'text-secondary', size: 28 },
    { Icon: Recycle, color: 'text-primary', size: 24 },
    { Icon: Zap, color: 'text-yellow-300', size: 22 },
    { Icon: Globe, color: 'text-primary', size: 30 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [particle.x + '%', (particle.x + 20) + '%'],
              y: [particle.y + '%', (particle.y - 20) + '%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
          />
        ))}
      </div>

      {/* Main animation container with realistic Earth */}
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        
        {/* Realistic 3D Earth */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: stage >= 1 ? 1 : 0,
            scale: stage >= 1 ? 1 : 0,
          }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          className="relative z-10"
        >
          {stage >= 1 && (
            <Earth3D 
              size="intro" 
              autoRotate={true}
              className="filter drop-shadow-2xl"
            />
          )}
        </motion.div>

        {/* Climate effects overlay - Stage 2 */}
        {stage >= 2 && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Temperature rising effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-full h-full rounded-full bg-red-500/20 blur-xl"
            />

            {/* Melting ice effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, opacity: 0 }}
                animate={{ 
                  y: 200,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeIn"
                }}
                className="absolute w-2 h-4 bg-blue-300 rounded-full"
                style={{
                  left: `${30 + i * 5}%`,
                  top: '10%',
                }}
              />
            ))}
          </div>
        )}

        {/* Renewable energy icons - Stage 3+ */}
        {stage >= 3 && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Solar and wind energy icons floating around */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`energy-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: [0.6, 1, 0.6],
                  y: [0, -10, 0],
                  rotate: 360
                }}
                transition={{
                  scale: { delay: 0.5 + i * 0.1, duration: 0.6 },
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className="absolute w-8 h-8 text-primary"
                style={{
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${20 + Math.floor(i / 4) * 25}%`,
                }}
              >
                {i % 2 === 0 ? <Sun size={24} /> : <Wind size={24} />}
              </motion.div>
            ))}
          </div>
        )}

        {/* Global connection network - Stage 6 */}
        {stage >= 6 && (
          <div className="absolute inset-0 pointer-events-none">
            {iconElements.map((element, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  rotate: 360
                }}
                transition={{ 
                  scale: { delay: 0.1 * i, duration: 0.5 },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className="absolute flex items-center justify-center"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-220px) rotate(-${i * 45}deg)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-20px',
                  marginTop: '-20px'
                }}
              >
                <motion.div 
                  className={`p-3 rounded-xl bg-card shadow-card border border-border/50 ${element.color} hover-glow`}
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      '0 4px 16px -4px hsl(var(--muted) / 0.3)',
                      '0 8px 32px -8px hsl(var(--primary) / 0.4)',
                      '0 4px 16px -4px hsl(var(--muted) / 0.3)'
                    ]
                  }}
                  transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
                  }}
                >
                  <element.Icon size={element.size} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Text and call to action - Stage 7 */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mt-16 max-w-2xl px-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-earth bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              CLIMATE ACTION PROJECT
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transforming our planet through innovation, collaboration, and sustainable action. 
              Join the movement for a greener tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-primary font-medium"
            >
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Renewable Energy
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Carbon Reduction
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Global Impact
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={skipIntro}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-6 py-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5"
      >
        Skip Intro
      </motion.button>

      {/* Transition effect - Stage 8 */}
      {stage >= 8 && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary"
        />
      )}
    </motion.div>
  );
};

export default RealisticIntro;