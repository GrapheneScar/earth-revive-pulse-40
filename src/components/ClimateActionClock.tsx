import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Leaf, Globe, Clock } from 'lucide-react';

const ClimateActionClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Global');
  const [timeZone, setTimeZone] = useState('UTC');

  useEffect(() => {
    // Get user's location and timezone
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setTimeZone(timezone);
          
          // Simple location detection based on timezone
          const city = timezone.split('/').pop()?.replace('_', ' ') || 'Global';
          setLocation(city);
        },
        () => {
          // Fallback to browser timezone
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

    return () => clearInterval(timer);
  }, []);

  // Calculate angles for clock hands
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours() % 12;

  const secondAngle = (seconds * 6) - 90; // 6 degrees per second
  const minuteAngle = (minutes * 6) + (seconds * 0.1) - 90; // 6 degrees per minute + smooth seconds
  const hourAngle = (hours * 30) + (minutes * 0.5) - 90; // 30 degrees per hour + smooth minutes

  // Hour markers
  const hourMarkers = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30) - 90;
    const isMainHour = i % 3 === 0;
    const x1 = 50 + (isMainHour ? 35 : 38) * Math.cos(angle * Math.PI / 180);
    const y1 = 50 + (isMainHour ? 35 : 38) * Math.sin(angle * Math.PI / 180);
    const x2 = 50 + 42 * Math.cos(angle * Math.PI / 180);
    const y2 = 50 + 42 * Math.sin(angle * Math.PI / 180);

    return { x1, y1, x2, y2, isMainHour, number: i === 0 ? 12 : i };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border-primary/20 shadow-glow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <CardContent className="p-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Climate Action Clock
              </h2>
            </div>
            
            {/* Location and time info */}
            <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{timeZone}</span>
              </div>
            </div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 px-4 py-2">
                "Act Now, Sustain Forever, Save Earth"
              </Badge>
            </motion.div>
          </motion.div>

          {/* Analog Clock */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Clock Face */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
              >
                {/* Outer ring with gradient */}
                <defs>
                  <radialGradient id="clockGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--background))" />
                    <stop offset="70%" stopColor="hsl(var(--card))" />
                    <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
                  </radialGradient>
                  <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>

                {/* Clock face background */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="url(#clockGradient)"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="0.5"
                  className="drop-shadow-lg"
                />

                {/* Hour markers */}
                {hourMarkers.map((marker, i) => (
                  <g key={i}>
                    <line
                      x1={marker.x1}
                      y1={marker.y1}
                      x2={marker.x2}
                      y2={marker.y2}
                      stroke={marker.isMainHour ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                      strokeWidth={marker.isMainHour ? "0.8" : "0.4"}
                      className="drop-shadow-sm"
                    />
                    {marker.isMainHour && (
                      <text
                        x={50 + 32 * Math.cos(((i * 30) - 90) * Math.PI / 180)}
                        y={50 + 32 * Math.sin(((i * 30) - 90) * Math.PI / 180)}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="fill-primary text-xs font-bold"
                        style={{ fontSize: '3px' }}
                      >
                        {marker.number}
                      </text>
                    )}
                  </g>
                ))}

                {/* Hour hand */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={50 + 20 * Math.cos(hourAngle * Math.PI / 180)}
                  y2={50 + 20 * Math.sin(hourAngle * Math.PI / 180)}
                  stroke="url(#handGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="drop-shadow-md"
                  animate={{ 
                    x2: 50 + 20 * Math.cos(hourAngle * Math.PI / 180),
                    y2: 50 + 20 * Math.sin(hourAngle * Math.PI / 180)
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />

                {/* Minute hand */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={50 + 30 * Math.cos(minuteAngle * Math.PI / 180)}
                  y2={50 + 30 * Math.sin(minuteAngle * Math.PI / 180)}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="drop-shadow-md"
                  animate={{ 
                    x2: 50 + 30 * Math.cos(minuteAngle * Math.PI / 180),
                    y2: 50 + 30 * Math.sin(minuteAngle * Math.PI / 180)
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />

                {/* Second hand */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2={50 + 35 * Math.cos(secondAngle * Math.PI / 180)}
                  y2={50 + 35 * Math.sin(secondAngle * Math.PI / 180)}
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  className="drop-shadow-sm"
                  animate={{ 
                    x2: 50 + 35 * Math.cos(secondAngle * Math.PI / 180),
                    y2: 50 + 35 * Math.sin(secondAngle * Math.PI / 180)
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />

                {/* Center dot */}
                <circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="hsl(var(--primary))"
                  className="drop-shadow-md"
                />
                
                {/* Inner center dot */}
                <circle
                  cx="50"
                  cy="50"
                  r="1"
                  fill="hsl(var(--background))"
                />
              </svg>

              {/* Floating elements around clock */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                  }}
                  animate={{
                    scale: [0.5, 1, 0.5],
                    opacity: [0.3, 0.8, 0.3],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Digital time display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl p-4 border border-primary/10"
          >
            <div className="text-2xl md:text-3xl font-mono font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
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
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClimateActionClock;