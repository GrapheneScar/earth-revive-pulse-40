import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Globe, Leaf, Sun, Droplets, Wind, TreePine, Recycle } from 'lucide-react';

interface SketchfabEarthIntroProps {
  onComplete: () => void;
}

const SketchfabEarthIntro = ({ onComplete }: SketchfabEarthIntroProps) => {
  const [stage, setStage] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const floatingIcons = [
    { Icon: Sun, color: 'text-yellow-400', delay: 0 },
    { Icon: Droplets, color: 'text-blue-400', delay: 0.2 },
    { Icon: Wind, color: 'text-cyan-400', delay: 0.4 },
    { Icon: TreePine, color: 'text-green-400', delay: 0.6 },
    { Icon: Leaf, color: 'text-emerald-400', delay: 0.8 },
    { Icon: Recycle, color: 'text-primary', delay: 1.0 },
    { Icon: Globe, color: 'text-secondary', delay: 1.2 },
    { Icon: Sparkles, color: 'text-accent', delay: 1.4 }
  ];

  useEffect(() => {
    const timeline = [
      { delay: 500, action: () => setStage(1) }, // Earth appears
      { delay: 2000, action: () => setStage(2) }, // Icons start floating
      { delay: 3500, action: () => setShowTitle(true) }, // Title appears
      { delay: 4500, action: () => setShowSubtitle(true) }, // Subtitle appears
      { delay: 7000, action: () => setStage(3) }, // Transition out
      { delay: 8500, action: onComplete }, // Complete
    ];

    timeline.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });
  }, [onComplete]);

  const skipIntro = () => {
    setStage(3);
    setTimeout(onComplete, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 100,
                Math.random() * window.innerHeight - 200
              ]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
          />
        ))}
      </div>

      {/* Main Earth container */}
      <div className="relative w-full max-w-4xl h-[500px] md:h-[600px]">
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: -180 }}
          animate={{ 
            scale: stage >= 1 ? 1 : 0,
            opacity: stage >= 1 ? 1 : 0,
            rotateY: stage >= 1 ? 0 : -180
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          {/* Sketchfab Earth Model */}
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-hero bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/10">
            <iframe 
              title="Earth - Climate Action Project"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/41fc80d85dfd480281f21b74b2de2faa/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0&camera=0"
            />
          </div>

          {/* Glowing ring effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: stage >= 1 ? [0.8, 1.1, 0.8] : 0.8,
              opacity: stage >= 1 ? [0.3, 0.6, 0.3] : 0
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-3xl bg-gradient-earth opacity-20 blur-xl"
          />
        </motion.div>

        {/* Floating icons around Earth */}
        <AnimatePresence>
          {stage >= 2 && floatingIcons.map(({ Icon, color, delay }, index) => {
            const angle = (index * 45) % 360;
            const radius = 280;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                initial={{ 
                  scale: 0, 
                  opacity: 0,
                  x: 0,
                  y: 0
                }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  x: x,
                  y: y,
                  rotate: 360
                }}
                transition={{
                  scale: { delay: delay, duration: 0.6 },
                  opacity: { delay: delay, duration: 0.6 },
                  x: { delay: delay, duration: 1.2, ease: "easeOut" },
                  y: { delay: delay, duration: 1.2, ease: "easeOut" },
                  rotate: { 
                    delay: delay + 0.5,
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`p-4 rounded-2xl bg-background/80 backdrop-blur-sm shadow-soft border border-border/50 ${color}`}
                >
                  <Icon size={24} />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Title and subtitle */}
      <div className="text-center mt-8 space-y-4 max-w-4xl px-4">
        <AnimatePresence>
          {showTitle && (
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-earth bg-clip-text text-transparent"
            >
              JBCN Climate Action
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Transforming Tomorrow Through
              </p>
              <motion.p 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.05em" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-nature bg-clip-text text-transparent"
              >
                Youth-Led Environmental Action
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pulse effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: stage >= 1 ? [1, 1.5, 1] : 0,
          opacity: stage >= 1 ? [0.1, 0.3, 0.1] : 0
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-earth pointer-events-none"
      />

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={skipIntro}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 bg-background/50 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50"
      >
        Skip Introduction
      </motion.button>

      {/* Exit animation overlay */}
      {stage >= 3 && (
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 0.3, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-lg"
        />
      )}
    </motion.div>
  );
};

export default SketchfabEarthIntro;