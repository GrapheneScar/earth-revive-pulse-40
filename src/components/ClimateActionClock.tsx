import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, TrendingDown, Calendar, AlertTriangle, Leaf } from 'lucide-react';

interface ClimateMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  description: string;
}

const ClimateActionClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  // Climate deadline: Paris Agreement target by 2030
  const climateDeadline = new Date('2030-12-31T23:59:59');

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const target = climateDeadline.getTime();
    const difference = target - now;

    if (difference < 0) {
      return {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { years, days, hours, minutes, seconds };
  };

  const timeRemaining = getTimeRemaining();

  const climateMetrics: ClimateMetric[] = [
    {
      label: "CO₂ Levels",
      value: "421.5 ppm",
      change: "+2.5 ppm/year",
      trend: 'up',
      icon: <TrendingUp className="w-4 h-4" />,
      description: "Current atmospheric CO₂ concentration"
    },
    {
      label: "Global Temp",
      value: "+1.1°C",
      change: "Above pre-industrial",
      trend: 'up',
      icon: <TrendingUp className="w-4 h-4" />,
      description: "Global temperature rise since 1880"
    },
    {
      label: "Forest Area",
      value: "31%",
      change: "-10M hectares/year",
      trend: 'down',
      icon: <TrendingDown className="w-4 h-4" />,
      description: "Global forest coverage remaining"
    },
    {
      label: "Renewable Energy",
      value: "29%",
      change: "+8.5% growth",
      trend: 'up',
      icon: <TrendingUp className="w-4 h-4" />,
      description: "Share of global electricity generation"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto"
    >
      <Card className="bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border-primary/20 shadow-glow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
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
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
              >
                <Clock className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Climate Action Clock
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Time remaining to limit global warming to 1.5°C under the Paris Agreement
            </p>
          </motion.div>

          {/* Main Countdown */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 mb-8 border border-primary/20"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <Badge variant="destructive" className="bg-accent/20 text-accent border-accent/30">
                URGENT: 2030 Climate Target
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {[
                { label: "Years", value: timeRemaining.years },
                { label: "Days", value: timeRemaining.days },
                { label: "Hours", value: timeRemaining.hours },
                { label: "Minutes", value: timeRemaining.minutes },
                { label: "Seconds", value: timeRemaining.seconds }
              ].map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-card/50 rounded-xl p-4 border border-primary/10"
                >
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent mb-2"
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                    {unit.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Climate Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {climateMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    metric.trend === 'up' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {metric.icon}
                  </div>
                  <motion.div
                    animate={{
                      rotate: metric.trend === 'up' ? [0, 10, 0] : [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Leaf className="w-4 h-4 text-primary/60" />
                  </motion.div>
                </div>
                
                <div className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {metric.label}
                </div>
                <div className={`text-xs font-medium ${
                  metric.trend === 'up' ? 'text-accent' : 'text-primary'
                }`}>
                  {metric.change}
                </div>
                
                {/* Progress bar for visual effect */}
                <div className="mt-3 h-1 bg-border/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 40 + 50}%` }}
                    transition={{ duration: 2, delay: 1.6 + index * 0.2 }}
                    className={`h-full ${
                      metric.trend === 'up' 
                        ? 'bg-gradient-to-r from-accent to-accent/60' 
                        : 'bg-gradient-to-r from-primary to-primary/60'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-8 p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl border border-primary/10"
          >
            <p className="text-muted-foreground mb-4">
              Every second counts in our fight against climate change. Join the movement today.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Real-time data tracking
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Global climate metrics
              </span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClimateActionClock;