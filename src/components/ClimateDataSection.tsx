import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Droplets, Wind, Sun, Factory, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ClimateDataSection = () => {
  const climateStats = [
    {
      icon: Factory,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-500/10',
      value: '37.4 Gt',
      label: 'Annual CO₂ Emissions',
      description: 'Global carbon dioxide emissions from fossil fuels and industry',
      change: '+1.1%',
      trend: 'up',
      source: 'Global Carbon Project, 2024',
      sourceUrl: 'https://www.globalcarbonproject.org/',
      detail: 'Emissions reached 37.4 gigatons in 2023, showing a continued upward trend despite international climate commitments.'
    },
    {
      icon: Sun,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      value: '1.1°C',
      label: 'Global Temperature Rise',
      description: 'Average global temperature increase since pre-industrial times',
      change: 'Above 1850-1900 baseline',
      trend: 'up',
      source: 'IPCC Sixth Assessment Report, 2023',
      sourceUrl: 'https://www.ipcc.ch/assessment-report/ar6/',
      detail: 'The planet has warmed by approximately 1.1°C since the late 19th century, with most warming occurring in the past 40 years.'
    },
    {
      icon: Droplets,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      value: '3.4 mm',
      label: 'Sea Level Rise per Year',
      description: 'Average annual rate of global sea level increase',
      change: 'Accelerating trend',
      trend: 'up',
      source: 'NASA Sea Level Change Portal, 2024',
      sourceUrl: 'https://sealevel.nasa.gov/',
      detail: 'Global mean sea level has risen about 21-24 cm since 1880, with the rate accelerating to 3.4 mm per year.'
    },
    {
      icon: Wind,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      value: '30%',
      label: 'Renewable Energy Share',
      description: 'Proportion of global electricity from renewable sources',
      change: '+2.5% annual growth',
      trend: 'up',
      source: 'International Energy Agency, 2024',
      sourceUrl: 'https://www.iea.org/reports/renewables-2024',
      detail: 'Renewable energy capacity additions reached record highs, with solar and wind leading the transition to clean energy.'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Scientific Data & Evidence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Climate Action by the{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Understanding the scale of climate change through verified scientific data and research
          </p>
        </motion.div>

        {/* Climate Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {climateStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-1">
                          {stat.value}
                        </h3>
                        <p className="text-sm font-semibold text-foreground/80">
                          {stat.label}
                        </p>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="text-xs font-medium mb-2">{stat.detail}</p>
                            <div className="border-t border-border/50 pt-2 mt-2">
                              <p className="text-xs text-muted-foreground">Source: {stat.source}</p>
                              <a 
                                href={stat.sourceUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline block mt-1"
                              >
                                View source →
                              </a>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {stat.description}
                    </p>
                    
                    <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ${
                      stat.trend === 'up' 
                        ? stat.label.includes('Renewable') 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-red-500/10 text-red-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      <span className="font-medium">{stat.change}</span>
                    </div>
                  </div>
                </div>

                {/* Source citation */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <a
                    href={stat.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>Source: {stat.source}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">
                The Science is Clear
              </h3>
              <p className="text-muted-foreground mb-6">
                These metrics represent the urgent reality of climate change. Every action we take today 
                shapes the world of tomorrow. Join us in making a difference based on scientific evidence 
                and proven solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Data updated regularly</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Peer-reviewed sources</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Global climate research</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Citations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Data compiled from: Global Carbon Project, IPCC, NASA, IEA • Last updated: 2024 • 
            All statistics verified by peer-reviewed scientific research
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClimateDataSection;
