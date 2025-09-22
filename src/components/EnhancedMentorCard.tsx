import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TreePine, Target, Star, Crown, Globe2 } from "lucide-react";

const EnhancedMentorCard = () => {
  return (
    <motion.div
      className="relative max-w-7xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Elegant Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-3xl" />
      
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-6 h-6 ${
            i % 3 === 0 ? 'bg-primary/10' : 
            i % 3 === 1 ? 'bg-secondary/10' : 'bg-primary/15'
          } rounded-full blur-sm`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <Card className="relative overflow-hidden border-2 border-transparent bg-card/50 backdrop-blur-sm shadow-glow">
        {/* Sophisticated border animation */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, hsl(var(--primary) / 0.3) 50%, transparent 70%), linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
            backgroundSize: '200% 200%, 100% 4px',
            backgroundRepeat: 'no-repeat, repeat-x',
            backgroundPosition: '0% 0%, 0% 0%',
          }}
          animate={{
            backgroundPosition: ['0% 0%, 0% 0%', '100% 100%, 400% 0%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section - Left Side */}
            <div className="lg:w-2/5 relative">
              <div className="relative h-[400px] lg:h-[600px]">
                {/* Background glow */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative w-full h-full rounded-none lg:rounded-l-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/gagandeep-sir.jpg"
                    alt="Gagandeep Chopra"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Mentor image failed to load:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Static Badge - Bottom Right */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32">
                  <div className="relative w-full h-full">
                    {/* Glow effects */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-30 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <img
                      src="/lovable-uploads/mentor-badge-updated-2026.png"
                      alt="Climate Action Schools Mentor Badge 2026"
                      className="relative w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                    />
                    
                    {/* Sparkle effects */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating achievement icons */}
                <motion.div
                  className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Globe2 className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="absolute top-6 left-6 w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -6, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Star className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center h-[400px] lg:h-[600px]">
              {/* Header with crown icon */}
              <motion.div
                className="flex items-center justify-center lg:justify-start mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                  <Crown className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold text-sm">Leadership Excellence</span>
                  <Crown className="w-5 h-5 text-primary" />
                </div>
              </motion.div>

              <motion.div
                className="space-y-4 flex-1 flex flex-col justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Name and Title */}
                <div className="space-y-2">
                  <motion.h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    GAGANDEEP CHOPRA
                  </motion.h3>
                  
                  <motion.div
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg lg:text-xl font-semibold text-primary">
                      National Leader & Climate Education Pioneer
                    </h4>
                    <p className="text-muted-foreground font-medium text-sm">
                      Climate Action Project India • JBCN International School Mentor
                    </p>
                  </motion.div>
                </div>

                {/* Badges */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 text-xs">
                    National Leader
                  </Badge>
                  <Badge className="bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 text-xs">
                    Mentor Excellence
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 text-xs">
                    Climate Champion
                  </Badge>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-muted-foreground leading-relaxed text-sm lg:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  As the National Leader of the Climate Action Project in India, Gagandeep Chopra has revolutionized climate education across the nation. His visionary leadership has transformed how over 50,000 students approach environmental challenges.
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-xs text-muted-foreground">Premier Schools</div>
                  </div>
                  <div className="bg-secondary/10 p-3 rounded-xl border border-secondary/20">
                    <div className="text-2xl font-bold text-secondary mb-1">50K+</div>
                    <div className="text-xs text-muted-foreground">Students Inspired</div>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-xl border border-accent/20">
                    <div className="text-2xl font-bold text-accent mb-1">95%</div>
                    <div className="text-xs text-muted-foreground">Engagement Rate</div>
                  </div>
                  <div className="bg-primary/15 p-3 rounded-xl border border-primary/30">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-xs text-muted-foreground">Years Leadership</div>
                  </div>
                </motion.div>

                {/* Achievements - Condensed */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <h5 className="text-sm font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Leadership Impact
                  </h5>
                  <div className="space-y-2">
                    {[
                      { icon: Award, text: "Spearheaded India's largest climate action network", color: "text-primary" },
                      { icon: TreePine, text: "Developed nationally adopted curriculum framework", color: "text-secondary" },
                      { icon: Target, text: "Achieved 95% engagement in climate programs", color: "text-accent" }
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2 p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <achievement.icon className={`w-3 h-3 mt-0.5 flex-shrink-0 ${achievement.color}`} />
                        <span className="text-xs">{achievement.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedMentorCard;