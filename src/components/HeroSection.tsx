import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Eye, EyeOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showSpline, setShowSpline] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [splineEnabled, setSplineEnabled] = useState(() => {
    const saved = localStorage.getItem('spline-enabled');
    return saved ? JSON.parse(saved) : false;
  });
  const [easterEggClicks, setEasterEggClicks] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEasterEgg = () => {
    setEasterEggClicks(prev => prev + 1);
  };
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image with overlay - hidden when 3D is active */}
      {!(splineEnabled && (showSpline || isHovered)) && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: 'url(/hero-collage-new.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]" />
        </>
      )}
      
      {/* Dynamic floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Energy particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full shadow-glow"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              opacity: 0 
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Floating icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-primary/30"
            initial={{ 
              x: -100, 
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0.8
            }}
            animate={{ 
              x: window.innerWidth + 100,
              y: Math.random() * window.innerHeight,
              rotate: 360,
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
          >
            <Leaf size={20 + Math.random() * 20} />
          </motion.div>
        ))}
      </div>

      {/* Interactive Spline 3D Element - Background */}
      {splineEnabled && (showSpline || isHovered) && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe 
            src='https://my.spline.design/greenpurple-n2vqGCVZdsoNnxOYmrAty5Ej/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-700 pointer-events-auto"
            title="Interactive 3D Climate Model"
            allow="autoplay; fullscreen; xr-spatial-tracking"
          />
        </motion.div>
      )}

      {/* Dark overlay behind text - lighter when 3D is active */}
      <div className={`absolute inset-0 z-5 backdrop-blur-[1px] ${
        splineEnabled && (showSpline || isHovered) 
          ? 'bg-black/10' 
          : 'bg-black/30'
      }`} />

      {/* Easter Egg floating elements */}
      {easterEggClicks > 5 && (
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(easterEggClicks - 5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              {['🌱', '🌍', '♻️', '🌿', '💚'][i % 5]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Toggle Switch */}
      <motion.div 
        className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={() => {
            const newState = !splineEnabled;
            setSplineEnabled(newState);
            localStorage.setItem('spline-enabled', JSON.stringify(newState));
          }}
          className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {splineEnabled ? <Eye className="w-3 h-3 sm:w-4 sm:h-4" /> : <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />}
          <span className="text-xs sm:text-sm font-medium">
            {splineEnabled ? '3D On' : '3D Off'}
          </span>
        </motion.button>
      </motion.div>

      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 text-balance relative z-10 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span 
              className="text-white drop-shadow-2xl cursor-pointer"
              onClick={handleEasterEgg}
            >
              CLIMATE ACTION
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">
              PROJECT
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-4xl mx-auto text-balance leading-relaxed relative z-10 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 1px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            Transforming our planet through innovation, collaboration, and sustainable action. 
            Join millions worldwide in building a greener, more sustainable future for all.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 text-xs sm:text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {['Carbon Neutral', 'Renewable Energy', 'Global Impact'].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 text-white rounded-full border border-white/30 backdrop-blur-sm shadow-lg"
                style={{
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                animate={{ 
                  boxShadow: [
                    '0 0 0 rgba(255, 255, 255, 0)',
                    '0 0 15px rgba(255, 255, 255, 0.3)',
                    '0 0 0 rgba(255, 255, 255, 0)'
                  ]
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, delay: i * 0.5 }
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                onClick={() => {
                  navigate('/initiatives');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto group bg-white/90 hover:bg-white text-black shadow-2xl transition-all duration-300 hover:shadow-glow px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm border-2 border-white/50"
              >
                Join the Movement
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white/20 hover:border-white transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm shadow-lg"
                style={{
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                }}
              >
                Discover Impact
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;