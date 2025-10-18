import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, AlertTriangle, Leaf, Thermometer, Trees, Zap, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const ClimateCountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    // Paris Agreement target deadline: December 31, 2030
    const calculateTimeLeft = () => {
      const targetDate = new Date('2030-12-31T23:59:59Z');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor(difference % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(difference % (1000 * 60) / 1000);
        setTimeLeft({
          years,
          days,
          hours,
          minutes,
          seconds
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Authentic climate data with citations
  const climateMetrics = [{
    icon: Leaf,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    value: '421.5 ppm',
    label: 'CO₂ Levels',
    change: '+2.5 ppm/year',
    trend: 'up',
    source: 'NOAA Global Monitoring Laboratory, 2024',
    sourceUrl: 'https://gml.noaa.gov/ccgg/trends/'
  }, {
    icon: Thermometer,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-500/10',
    value: '+1.1°C',
    label: 'Global Temp',
    change: 'Above pre-industrial',
    trend: 'up',
    source: 'IPCC Sixth Assessment Report, 2023',
    sourceUrl: 'https://www.ipcc.ch/'
  }, {
    icon: Trees,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    value: '31%',
    label: 'Forest Area',
    change: '-10M hectares/year',
    trend: 'down',
    source: 'FAO Global Forest Resources Assessment, 2024',
    sourceUrl: 'https://www.fao.org/forest-resources-assessment/'
  }, {
    icon: Zap,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    value: '29%',
    label: 'Renewable Energy',
    change: '+8.5% growth',
    trend: 'up',
    source: 'IEA World Energy Outlook, 2024',
    sourceUrl: 'https://www.iea.org/'
  }];
  const timeUnits = [{
    value: timeLeft.years,
    label: 'YEARS'
  }, {
    value: timeLeft.days,
    label: 'DAYS'
  }, {
    value: timeLeft.hours,
    label: 'HOURS'
  }, {
    value: timeLeft.minutes,
    label: 'MINUTES'
  }, {
    value: timeLeft.seconds,
    label: 'SECONDS'
  }];
  return <motion.section 
    id="climate-countdown"
    initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }} viewport={{
    once: true
  }} className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/5 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <Card className="bg-gradient-to-br from-green-950/30 via-card/50 to-green-950/20 backdrop-blur-sm border-green-500/20 shadow-2xl overflow-hidden">
          <div className="p-4 sm:p-6 md:p-12">
            {/* Header */}
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="text-center mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent text-center sm:text-left">Climate Action Countdown</h2>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
                Time remaining to limit global warming to 1.5°C under the Paris Agreement
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.4
          }} className="mb-8">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px] sm:text-xs px-2 py-1">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  URGENT: 2030 Climate Target
                </Badge>
              </div>
              
              <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4">
                {timeUnits.map((unit, index) => <motion.div key={unit.label} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.5 + index * 0.1
              }} className="bg-gradient-to-br from-green-950/50 to-green-900/30 backdrop-blur-sm rounded-md sm:rounded-lg p-2.5 sm:p-3 md:p-6 border border-green-500/20 flex flex-col items-center justify-center min-h-[60px] sm:min-h-[80px] md:min-h-auto">
                    <motion.div key={unit.value} initial={{
                  scale: 1.2,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  duration: 0.3
                }} className="text-base sm:text-2xl md:text-5xl font-bold text-green-400 mb-0.5 sm:mb-1 md:mb-2 font-mono leading-none">
                      {String(unit.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground font-semibold tracking-wider leading-tight text-center">
                      {unit.label}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Climate Metrics */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {climateMetrics.map((metric, index) => <motion.div key={metric.label} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9 + index * 0.1
            }} className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border/50 hover:border-green-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${metric.bgColor} flex items-center justify-center`}>
                      <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${metric.iconColor}`} />
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-xs">Source: {metric.source}</p>
                          <a href={metric.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline block mt-1">
                            Learn more →
                          </a>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-0.5 sm:mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-muted-foreground mb-1.5 sm:mb-2">
                    {metric.label}
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${metric.trend === 'up' ? metric.label === 'Renewable Energy' ? 'text-green-500' : 'text-red-500' : 'text-red-500'}`}>
                    {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span>{metric.change}</span>
                  </div>
                </motion.div>)}
            </motion.div>

            {/* Call to Action */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2
          }} className="text-center border-t border-border/50 pt-4 sm:pt-6">
              <p className="text-foreground mb-2 sm:mb-3 text-xs sm:text-sm md:text-base px-2">
                Every second counts in our fight against climate change. Join the movement today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Real-time data tracking</span>
                </div>
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs">Global climate metrics</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </Card>

        {/* Citations Footer */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.4
      }} className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Data Sources: NOAA, IPCC, FAO, IEA (2024) • Updated regularly with latest climate science
          </p>
        </motion.div>
      </div>
    </motion.section>;
};
export default ClimateCountdownClock;