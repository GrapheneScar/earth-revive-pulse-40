import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Thermometer, 
  CloudRain, 
  Sun, 
  Wind, 
  Leaf, 
  TreePine, 
  Droplets, 
  Zap,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface ClimateActionIntroProps {
  onComplete: () => void;
  onSkipPermanently: () => void;
}

const ClimateActionIntro = ({ onComplete, onSkipPermanently }: ClimateActionIntroProps) => {
  const [stage, setStage] = useState(0);
  const [temperature, setTemperature] = useState(15.2);
  const [showStats, setShowStats] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSkipOptions, setShowSkipOptions] = useState(false);
  const [easterEggs, setEasterEggs] = useState([]);

  const climateStats = [
    { icon: TrendingUp, value: "+1.1°C", label: "Global Temp Rise", color: "text-red-500" },
    { icon: TreePine, value: "10B", label: "Trees Lost/Year", color: "text-orange-500" },
    { icon: Droplets, value: "2B", label: "People Water Stressed", color: "text-blue-500" },
    { icon: Zap, value: "36GT", label: "CO₂ Emissions", color: "text-purple-500" }
  ];

  useEffect(() => {
    const timeline = [
      { delay: 500, action: () => setStage(1) }, // Temperature rising
      { delay: 2000, action: () => setStage(2) }, // Weather chaos
      { delay: 3500, action: () => setStage(3) }, // Action response
      { delay: 5000, action: () => setShowStats(true) }, // Stats appear
      { delay: 6500, action: () => setShowTitle(true) }, // Title appears
      { delay: 8500, action: () => setStage(4) }, // Transition out
      { delay: 10000, action: onComplete }
    ];

    timeline.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    // Temperature animation
    const tempInterval = setInterval(() => {
      if (stage === 1) {
        setTemperature(prev => Math.min(prev + 0.1, 25.8));
      }
    }, 100);

    return () => clearInterval(tempInterval);
  }, [stage, onComplete]);

  const skipIntro = () => {
    if (!showSkipOptions) {
      setShowSkipOptions(true);
      return;
    }
    // This only runs when user clicks "Skip Now Only"
    setStage(4);
    setTimeout(onComplete, 800);
  };

  const skipPermanently = () => {
    onSkipPermanently();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden"
    >
      {/* Climate Crisis Visualization */}
      <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
        
        {/* Temperature Gauge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: stage >= 1 ? 1 : 0,
            opacity: stage >= 1 ? 1 : 0
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-48 h-48 rounded-full border-8 border-emerald-600 bg-emerald-800/50 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-emerald-500/20">
            <div className="text-center">
              <Thermometer 
                className={`w-12 h-12 mx-auto mb-2 transition-colors duration-300 ${
                  temperature > 20 ? 'text-red-500' : temperature > 18 ? 'text-orange-500' : 'text-blue-400'
                }`} 
              />
              <motion.div
                animate={{ scale: temperature > 20 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, repeat: temperature > 20 ? Infinity : 0 }}
                className="text-3xl font-bold text-white"
              >
                {temperature.toFixed(1)}°C
              </motion.div>
              <div className="text-sm text-emerald-300">Global Average</div>
            </div>
          </div>

          {/* Warning indicators */}
          {temperature > 20 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.7] }}
              transition={{ duration: 0.6 }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-red-500/50"
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Weather Chaos - Stage 2 */}
        <AnimatePresence>
          {stage >= 2 && (
            <>
              {/* Storm clouds */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`cloud-${i}`}
                  initial={{ x: -200, y: -100, opacity: 0 }}
                  animate={{ 
                    x: 100 + i * 80,
                    y: -80 + i * 20,
                    opacity: 0.8
                  }}
                  transition={{ delay: i * 0.3, duration: 1.5 }}
                  className="absolute"
                >
                  <CloudRain className="w-16 h-16 text-gray-500" />
                </motion.div>
              ))}

              {/* Extreme weather icons */}
              {[
                { Icon: Sun, position: { x: 200, y: -60 }, color: "text-yellow-400", delay: 0.5 },
                { Icon: Wind, position: { x: -180, y: 40 }, color: "text-cyan-400", delay: 0.8 },
                { Icon: Droplets, position: { x: 220, y: 80 }, color: "text-blue-400", delay: 1.1 }
              ].map(({ Icon, position, color, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1,
                    opacity: 0.8,
                    rotate: 0,
                    x: position.x,
                    y: position.y
                  }}
                  transition={{ delay, duration: 0.8 }}
                  className="absolute"
                >
                  <Icon className={`w-12 h-12 ${color}`} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Action Response - Stage 3 */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -bottom-20"
            >
              <div className="flex space-x-8">
                {[
                  { Icon: Leaf, color: "text-green-400", delay: 0 },
                  { Icon: TreePine, color: "text-emerald-500", delay: 0.2 },
                  { Icon: Zap, color: "text-yellow-400", delay: 0.4 }
                ].map(({ Icon, color, delay }, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0, scale: 0 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay, duration: 0.6 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className={`w-16 h-16 rounded-full bg-emerald-800 border-2 border-emerald-600 flex items-center justify-center ${color} shadow-lg shadow-emerald-500/30`}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Climate Stats */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl px-4"
          >
            {climateStats.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-4 bg-emerald-800/50 backdrop-blur-sm rounded-2xl border border-emerald-600/50 shadow-lg shadow-emerald-500/20"
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${color}`} />
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-sm text-emerald-300">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title */}
      <AnimatePresence>
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
            className="text-center mt-12 max-w-4xl px-4"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              Climate Action
              <span className="block text-transparent bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text drop-shadow-lg">
                Starts Now
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-emerald-200 mt-6"
            >
              Every degree matters. Every action counts.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Eggs */}
      <AnimatePresence>
        {easterEggs.map((egg) => (
          <motion.div
            key={egg.id}
            className="absolute text-4xl pointer-events-none z-30"
            initial={{ 
              x: egg.x, 
              y: egg.y, 
              scale: 0, 
              opacity: 0,
              rotate: 0 
            }}
            animate={{ 
              scale: [0, 1.5, 1],
              opacity: [0, 1, 0.7],
              rotate: [0, 360, 720],
              y: egg.y - 200
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 3,
              ease: "easeOut"
            }}
          >
            {egg.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Skip buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {!showSkipOptions ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={skipIntro}
            className="px-6 py-2 text-sm text-emerald-300 hover:text-white transition-colors duration-300 bg-emerald-800/50 backdrop-blur-sm rounded-full border border-emerald-600 hover:border-emerald-400"
          >
            Skip Introduction
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <motion.button
              onClick={skipIntro}
              className="px-4 py-2 text-sm text-emerald-300 hover:text-white transition-colors duration-300 bg-emerald-800/50 backdrop-blur-sm rounded-full border border-emerald-600 hover:border-emerald-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skip Now Only
            </motion.button>
            <motion.button
              onClick={skipPermanently}
              className="px-4 py-2 text-sm text-red-300 hover:text-white transition-colors duration-300 bg-red-800/50 backdrop-blur-sm rounded-full border border-red-600 hover:border-red-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skip Permanently
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Exit transition */}
      {stage >= 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background"
        />
      )}
    </motion.div>
  );
};

export default ClimateActionIntro;