import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Animated vertical stripes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scaleY: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute top-0 h-full bg-gradient-to-b from-primary/5 via-secondary/8 to-accent/5"
            style={{
              left: `${i * 8.33}%`,
              width: '2px',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 100,
                Math.random() * window.innerHeight - 200
              ]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
          />
        ))}
      </div>

      {/* Texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(var(--secondary-rgb), 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(var(--accent-rgb), 0.05) 50%, transparent 60%)
          `
        }}
      />

      {/* Animated wave effect */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(var(--primary-rgb), 0.1) 10px,
              rgba(var(--primary-rgb), 0.1) 20px
            )
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;