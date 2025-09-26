import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Users, Award, TreePine, Target, Star, Crown, Globe2, ChevronDown, ChevronUp } from "lucide-react";

const EnhancedMentorCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const fullBio = "Greetings Everyone, I am Gagan Deep, Senior Mathematics Teacher with over 18 years of experience in education, currently serving as CAS Coordinator at JBCN International School and Program Coordinator for Climate Action Schools and projects at JBCN. I am deeply passionate about climate and the environment, and over the years I have also been actively involved in community and service projects that nurture responsibility and empathy in learners. In my role, I focus on creating opportunities for learner leadership and engaging students in meaningful climate action initiatives. I am also privileged to serve as a Climate Action Mentor and Team Lead for new Climate Action Schools in India, where I guide, support, and encourage schools at every stage of their journey while sharing insights with the facilitator team to enhance the program's impact. I look forward to inspiring young changemakers and building strong collaborations with learners and schools, so together we can create meaningful and lasting change for a sustainable future.";
  
  const shortBio = "Greetings Everyone, I am Gagan Deep, Senior Mathematics Teacher with over 18 years of experience in education...";
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
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                {/* Background glow */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-20 blur-lg"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.2, 0.25, 0.2],
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
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    style={{ objectPosition: 'center top' }}
                    onError={(e) => {
                      console.error('Mentor image failed to load:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Static Badge - Overlapping Image */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 z-10">
                  <div className="relative w-full h-full">
                    {/* Glow effects */}
                    <motion.div
                      className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-40 blur-lg"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.7, 0.4],
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
                      className="relative w-full h-full object-contain drop-shadow-xl filter brightness-110 contrast-110"
                    />
                    
                    {/* Sparkle effects */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-90"
                        style={{
                          top: `${25 + Math.random() * 50}%`,
                          left: `${25 + Math.random() * 50}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]">
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
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-primary">
                      Senior Mathematics Teacher & CAS Coordinator
                    </h4>
                    <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                      JBCN International School • Climate Action Schools Mentor
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
                  <Badge className="bg-primary/20 text-primary border border-primary/30 px-2 py-1 text-xs">
                    18+ Years Experience
                  </Badge>
                  <Badge className="bg-secondary/20 text-secondary border border-secondary/30 px-2 py-1 text-xs">
                    Team Lead
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border border-accent/30 px-2 py-1 text-xs">
                    Climate Mentor
                  </Badge>
                </motion.div>

                {/* Description - Collapsible */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {isExpanded ? fullBio : shortBio}
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-1 h-auto font-medium text-xs flex items-center gap-1"
                  >
                    {isExpanded ? (
                      <>
                        Read Less
                        <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-xl border border-primary/20">
                    <div className="text-lg sm:text-2xl font-bold text-primary mb-1">18+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-secondary/10 p-2 sm:p-3 rounded-xl border border-secondary/20">
                    <div className="text-lg sm:text-2xl font-bold text-secondary mb-1">CAS</div>
                    <div className="text-xs text-muted-foreground">Coordinator</div>
                  </div>
                  <div className="bg-accent/10 p-2 sm:p-3 rounded-xl border border-accent/20">
                    <div className="text-lg sm:text-2xl font-bold text-accent mb-1">Team</div>
                    <div className="text-xs text-muted-foreground">Lead</div>
                  </div>
                  <div className="bg-primary/15 p-2 sm:p-3 rounded-xl border border-primary/30">
                    <div className="text-lg sm:text-2xl font-bold text-primary mb-1">100+</div>
                    <div className="text-xs text-muted-foreground">Schools Guided</div>
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