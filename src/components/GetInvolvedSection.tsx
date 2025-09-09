import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Users, Calculator, Images, Mail } from 'lucide-react';
import ClimateQuizGame from './ClimateQuizGame';

const GetInvolvedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const actionCards = [
    {
      icon: Users,
      title: "Join Our Community",
      description: "Connect with like-minded individuals passionate about environmental change.",
      action: "Join Us",
      variant: "default" as const,
      onClick: () => {
        navigate('/initiatives');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300);
      }
    },
    {
      icon: Calculator,
      title: "Calculate Your Carbon Footprint",
      description: "Discover your environmental impact and get personalized tips to reduce your carbon footprint.",
      action: "Start Calculator",
      variant: "secondary" as const,
      onClick: () => {
        navigate('/about');
        setTimeout(() => {
          const calculator = document.getElementById('carbon-calculator');
          if (calculator) {
            calculator.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 300);
      }
    },
    {
      icon: Images,
      title: "View Our Gallery",
      description: "Explore our collection of impactful moments and environmental achievements.",
      action: "View Gallery",
      variant: "outline" as const,
      onClick: () => {
        navigate('/gallery');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300);
      }
    },
    {
      icon: Mail,
      title: "Contact Us",
      description: "Get in touch with our team for partnerships, questions, or collaboration opportunities.",
      action: "Contact Us",
      variant: "outline" as const,
      onClick: () => {
        navigate('/contact');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300);
      }
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 bg-gradient-to-br from-background to-card relative overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-balance">
            Join the{' '}
            <span className="bg-gradient-earth bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Be part of the largest environmental movement in history. Your participation creates 
            ripple effects that transform communities, ecosystems, and our shared future.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {actionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="p-6 sm:p-8 lg:p-10 h-full shadow-hero border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm hover-glow transition-all duration-500 cursor-pointer relative overflow-hidden">
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                  <motion.div
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-glow group-hover:shadow-hero mx-auto sm:mx-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        '0 0 20px hsl(var(--primary) / 0.3)',
                        '0 0 40px hsl(var(--primary) / 0.6)',
                        '0 0 20px hsl(var(--primary) / 0.3)'
                      ]
                    }}
                    transition={{ 
                      rotate: { duration: 0.6 },
                      scale: { duration: 0.6 },
                      boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                    }}
                  >
                    <card.icon size={32} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                  </motion.div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-earth bg-clip-text text-transparent group-hover:bg-gradient-nature">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                      {card.description}
                    </p>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant={card.variant}
                        size="lg"
                        onClick={card.onClick}
                        className={`group/btn transition-all duration-300 shadow-card px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto ${
                          card.variant === 'default' 
                            ? 'bg-primary hover:bg-primary/90 shadow-hero text-primary-foreground' 
                            : card.variant === 'secondary'
                            ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                            : 'border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm'
                        }`}
                      >
                        {card.action}
                        <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Climate Quiz Game */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <ClimateQuizGame />
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;