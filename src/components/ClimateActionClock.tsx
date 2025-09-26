import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Leaf, Globe, Clock, TreePine, Droplets, Wind, Sun, Target } from 'lucide-react';

const ClimateActionClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Global');
  const [timeZone, setTimeZone] = useState('UTC');
  const [activeVision, setActiveVision] = useState(0);

  const visionStatements = [
    "Act Now",
    "Sustain Forever", 
    "Save Earth",
    "Green Future",
    "Climate Action",
    "Together Strong"
  ];

  const climateProgress = {
    reforestation: 65, // percentage
    renewable: 78,
    conservation: 42,
    education: 89
  };

  useEffect(() => {
    // Get user's location and timezone
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setTimeZone(timezone);
          const city = timezone.split('/').pop()?.replace('_', ' ') || 'Global';
          setLocation(city);
        },
        () => {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setTimeZone(timezone);
          const city = timezone.split('/').pop()?.replace('_', ' ') || 'Global';
          setLocation(city);
        }
      );
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cycle through vision statements
    const visionTimer = setInterval(() => {
      setActiveVision((prev) => (prev + 1) % visionStatements.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(visionTimer);
    };
  }, []);

  // Calculate angles for clock hands
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours() % 12;

  const secondAngle = (seconds * 6) - 90;
  const minuteAngle = (minutes * 6) + (seconds * 0.1) - 90;
  const hourAngle = (hours * 30) + (minutes * 0.5) - 90;

  // Climate-themed hour markers with icons
  const climateMarkers = [
    { pos: 12, icon: Sun, color: "text-yellow-500", label: "Solar" },
    { pos: 3, icon: Wind, color: "text-blue-400", label: "Wind" },
    { pos: 6, icon: TreePine, color: "text-green-500", label: "Forest" },
    { pos: 9, icon: Droplets, color: "text-cyan-400", label: "Water" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-5xl mx-auto"
    >
      <Card className="bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border-primary/20 shadow-glow relative overflow-hidden">
        {/* Floating climate elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {i % 4 === 0 && <Leaf className="w-3 h-3 text-green-400/40" />}
              {i % 4 === 1 && <Droplets className="w-3 h-3 text-blue-400/40" />}
              {i % 4 === 2 && <Wind className="w-2 h-2 text-cyan-400/40" />}
              {i % 4 === 3 && <Sun className="w-3 h-3 text-yellow-400/40" />}
            </motion.div>
          ))}
        </div>

        <CardContent className="p-8 relative z-10">
          {/* Header with rotating vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 via-blue-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-wider bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
                  CLIMATE ACTION CLOCK
                </h2>
                <motion.p
                  key={activeVision}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg font-semibold text-primary mt-2"
                >
                  {visionStatements[activeVision]}
                </motion.p>
              </div>
            </div>
            
            {/* Location and mission stats */}
            <div className="flex items-center justify-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Active Mission</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Climate Clock */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <radialGradient id="earthGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--background))" />
                    <stop offset="60%" stopColor="hsl(var(--card))" />
                    <stop offset="100%" stopColor="hsl(142 76% 36% / 0.1)" />
                  </radialGradient>
                  <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                  </filter>
                </defs>

                {/* Earth-like clock face */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="url(#earthGradient)"
                  stroke="#22c55e"
                  strokeWidth="0.5"
                  className="drop-shadow-lg"
                />

                {/* Climate progress rings */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1"
                  strokeDasharray={`${climateProgress.reforestation * 2.64} 264`}
                  className="opacity-30"
                  transform="rotate(-90 50 50)"
                />

                {/* Climate-themed markers */}
                {climateMarkers.map((marker, i) => {
                  const angle = ((marker.pos === 12 ? 0 : marker.pos) * 30) - 90;
                  const IconComponent = marker.icon;
                  return (
                    <g key={marker.pos}>
                      <motion.circle
                        cx={50 + 38 * Math.cos(angle * Math.PI / 180)}
                        cy={50 + 38 * Math.sin(angle * Math.PI / 180)}
                        r="3"
                        fill="#22c55e"
                        className="opacity-80"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                      <text
                        x={50 + 32 * Math.cos(angle * Math.PI / 180)}
                        y={50 + 32 * Math.sin(angle * Math.PI / 180)}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="fill-primary text-xs font-bold"
                        style={{ fontSize: '3px' }}
                      >
                        {marker.pos === 12 ? 12 : marker.pos}
                      </text>
                    </g>
                  );
                })}

                {/* Regular hour markers */}
                {[1, 2, 4, 5, 7, 8, 10, 11].map((hour) => {
                  const angle = (hour * 30) - 90;
                  return (
                    <g key={hour}>
                      <line
                        x1={50 + 38 * Math.cos(angle * Math.PI / 180)}
                        y1={50 + 38 * Math.sin(angle * Math.PI / 180)}
                        x2={50 + 42 * Math.cos(angle * Math.PI / 180)}
                        y2={50 + 42 * Math.sin(angle * Math.PI / 180)}
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth="0.5"
                      />
                      <text
                        x={50 + 32 * Math.cos(angle * Math.PI / 180)}
                        y={50 + 32 * Math.sin(angle * Math.PI / 180)}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="fill-muted-foreground text-xs"
                        style={{ fontSize: '2.5px' }}
                      >
                        {hour}
                      </text>
                    </g>
                  );
                })}

                {/* Animated hour hand (tree branch) */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={50 + 22 * Math.cos(hourAngle * Math.PI / 180)}
                  y2={50 + 22 * Math.sin(hourAngle * Math.PI / 180)}
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  animate={{ 
                    x2: 50 + 22 * Math.cos(hourAngle * Math.PI / 180),
                    y2: 50 + 22 * Math.sin(hourAngle * Math.PI / 180)
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />

                {/* Animated minute hand (water flow) */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={50 + 32 * Math.cos(minuteAngle * Math.PI / 180)}
                  y2={50 + 32 * Math.sin(minuteAngle * Math.PI / 180)}
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  animate={{ 
                    x2: 50 + 32 * Math.cos(minuteAngle * Math.PI / 180),
                    y2: 50 + 32 * Math.sin(minuteAngle * Math.PI / 180)
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />

                {/* Animated second hand (wind) */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={50 + 36 * Math.cos(secondAngle * Math.PI / 180)}
                  y2={50 + 36 * Math.sin(secondAngle * Math.PI / 180)}
                  stroke="#f59e0b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  animate={{ 
                    x2: 50 + 36 * Math.cos(secondAngle * Math.PI / 180),
                    y2: 50 + 36 * Math.sin(secondAngle * Math.PI / 180)
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />

                {/* Center - Earth symbol */}
                <circle cx="50" cy="50" r="2.5" fill="#22c55e" className="drop-shadow-md" />
                <circle cx="50" cy="50" r="1.5" fill="#3b82f6" />
                <circle cx="50" cy="50" r="0.8" fill="white" />
              </svg>

              {/* Floating climate actions */}
              <motion.div
                className="absolute top-4 right-4 flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TreePine className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-green-600">Planting</span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold text-blue-600">Conserving</span>
              </motion.div>

              <motion.div
                className="absolute top-4 left-4 flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <Sun className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-semibold text-yellow-600">Solar</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Digital time with climate stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Digital Clock */}
            <div className="text-center bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-4 border border-green-200/30">
              <div className="text-2xl md:text-3xl font-mono font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {currentTime.toLocaleTimeString('en-US', {
                  timeZone: timeZone,
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentTime.toLocaleDateString('en-US', {
                  timeZone: timeZone,
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Climate Progress */}
            <div className="bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-4 border border-green-200/30">
              <h3 className="text-sm font-semibold text-center mb-3 text-green-700 dark:text-green-400">Our Impact Today</h3>
              <div className="space-y-2">
                {[
                  { label: "Trees Planted", value: "12,847", icon: TreePine, color: "text-green-500" },
                  { label: "CO₂ Reduced", value: "2.3T", icon: Wind, color: "text-blue-500" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClimateActionClock;