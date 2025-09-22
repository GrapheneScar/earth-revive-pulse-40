import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TreePine, Target, Star, Crown, Globe2 } from "lucide-react";

const EnhancedMentorCard = () => {
  return (
    <motion.div
      className="relative max-w-6xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Elegant Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5 rounded-3xl" />
      
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-6 h-6 ${
            i % 3 === 0 ? 'bg-amber-400/10' : 
            i % 3 === 1 ? 'bg-orange-400/10' : 'bg-red-400/10'
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

      <Card className="relative overflow-hidden border-2 border-transparent bg-gradient-to-br from-background via-background/95 to-amber-500/5 shadow-2xl">
        {/* Sophisticated border animation */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(245, 158, 11, 0.3) 50%, transparent 70%), linear-gradient(90deg, #f59e0b, #f97316, #ef4444, #f59e0b)',
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

        {/* Main content */}
        <div className="relative p-8 md:p-12">
          {/* Header with crown icon */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 rounded-full border border-amber-200 dark:border-amber-800">
              <Crown className="w-6 h-6 text-amber-600" />
              <span className="text-amber-700 dark:text-amber-300 font-semibold">Leadership Excellence</span>
              <Crown className="w-6 h-6 text-amber-600" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Elegant photo frame */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl opacity-20 blur-xl"
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
                
                <div className="relative w-56 h-56 rounded-3xl overflow-hidden border-4 border-gradient-to-br from-amber-300 to-orange-400 shadow-2xl">
                  <img
                    src="/lovable-uploads/gagandeep-sir.jpg"
                    alt="Gagandeep Singh"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Static Badge - Bottom Right */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32">
                  <div className="relative w-full h-full">
                    {/* Multiple glow layers for luxury effect */}
                    <motion.div
                      className="absolute -inset-6 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 rounded-full opacity-30 blur-2xl"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full opacity-40 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
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
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-80"
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
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg"
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
                  className="absolute top-4 -left-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
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
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Name and Title */}
              <div className="space-y-4">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  GAGANDEEP CHOPRA
                </motion.h3>
                
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-primary">
                    National Leader & Climate Education Pioneer
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    Climate Action Project India • JBCN International School Mentor
                  </p>
                </motion.div>
              </div>

              {/* Badges */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 dark:from-amber-950/50 dark:to-orange-950/50 dark:text-amber-200 px-4 py-2">
                  National Leader
                </Badge>
                <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 dark:from-emerald-950/50 dark:to-teal-950/50 dark:text-emerald-200 px-4 py-2">
                  Mentor Excellence
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 dark:from-purple-950/50 dark:to-indigo-950/50 dark:text-purple-200 px-4 py-2">
                  Climate Champion
                </Badge>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                As the National Leader of the Climate Action Project in India, Gagandeep Chopra Sir has revolutionized climate education across the nation. His visionary leadership has transformed how over 50,000 students approach environmental challenges, making him one of the most influential climate educators in Asia.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
                  <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Premier Schools Guided</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-6 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Students Inspired</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Engagement Rate</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-6 rounded-2xl border border-cyan-200/50 dark:border-cyan-800/50">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Leadership</div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <h5 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Leadership Impact
                </h5>
                <div className="space-y-3">
                  {[
                    { icon: Award, text: "Spearheaded India's largest school climate action network", color: "text-amber-500" },
                    { icon: TreePine, text: "Developed curriculum framework adopted nationally", color: "text-emerald-500" },
                    { icon: Target, text: "Achieved 95% student engagement rate in climate programs", color: "text-blue-500" },
                    { icon: Globe2, text: "Established partnerships with international climate organizations", color: "text-purple-500" }
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <achievement.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${achievement.color}`} />
                      <span className="text-sm">{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default EnhancedMentorCard;