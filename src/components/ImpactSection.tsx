import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, TreePine } from 'lucide-react';
import DailyEcoChallenge from '@/components/DailyEcoChallenge';

const initiativeItems = [
  {
    icon: Waves,
    title: "Beach Clean Up",
    year: "2022",
    description: "We organised a Beach Clean-Up Drive to contribute towards a cleaner, healthier environment and raise awareness about the impact of waste on marine ecosystems.",
    color: "text-blue-500"
  },
  {
    icon: TreePine,
    title: "Earth Day",
    year: "2023",
    subtitle: "Nariman Point Dance and Posters",
    description: "We organised a Flash Mob and Walk of Awareness at Nariman Point, Mumbai, to celebrate Earth Day and promote environmental consciousness.",
    color: "text-green-500"
  }
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Our{' '}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Discover our impactful environmental initiatives that create meaningful change in communities. 
            From beach cleanups to awareness campaigns, we're making a difference one action at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {initiativeItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="p-6 sm:p-8 h-full shadow-hero border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm hover-glow transition-all duration-500">
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 ${item.color} flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-glow group-hover:shadow-hero`}
                  animate={{ 
                    boxShadow: [
                      '0 0 20px hsl(var(--primary) / 0.3)',
                      '0 0 40px hsl(var(--primary) / 0.6)',
                      '0 0 20px hsl(var(--primary) / 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                >
                  <item.icon size={40} />
                </motion.div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-lg font-semibold text-primary/80">({item.year})</span>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1 font-medium">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                
                <p className="text-muted-foreground text-center leading-relaxed mb-8">
                  {item.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex justify-center"
                >
                  <Button 
                    onClick={() => navigate('/initiatives')}
                    variant="outline"
                    className="group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                    <motion.span 
                      className="ml-2 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Daily Eco Challenge */}
        <DailyEcoChallenge />
      </div>
    </section>
  );
};

export default ImpactSection;