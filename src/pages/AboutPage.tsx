import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Target, Award, Compass, Lightbulb, Sparkles, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeadershipCards from '@/components/LeadershipCards';
import CarbonFootprintSection from '@/components/CarbonFootprintCalculator';
import PledgeForFuture from '@/components/PledgeForFuture';
import EcoNewsUpdates from '@/components/EcoNewsUpdates';
import ClimateActionClock from '@/components/ClimateActionClock';
import ClimateDataSection from '@/components/ClimateDataSection';
const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const timeline = [{
    year: "2020",
    title: "Foundation",
    description: "Climate Action Project was founded by environmental scientists and activists.",
    icon: Users
  }, {
    year: "2021",
    title: "First 1000 Members",
    description: "Reached our first milestone with community members across 25 countries.",
    icon: Target
  }, {
    year: "2022",
    title: "Major Initiatives Launch",
    description: "Launched solar energy and reforestation programs in partnership with local communities.",
    icon: Calendar
  }, {
    year: "2023",
    title: "Global Recognition",
    description: "Received UN Environmental Excellence Award for innovative climate solutions.",
    icon: Award
  }];
  const values = [{
    title: "Sustainability",
    description: "We believe in creating solutions that benefit both current and future generations.",
    color: "from-primary/20 to-primary/5"
  }, {
    title: "Innovation",
    description: "We embrace cutting-edge technology and creative approaches to environmental challenges.",
    color: "from-secondary/20 to-secondary/5"
  }, {
    title: "Community",
    description: "We work together with local communities to create lasting environmental impact.",
    color: "from-accent/20 to-accent/5"
  }, {
    title: "Transparency",
    description: "We maintain open communication about our progress, challenges, and impact.",
    color: "from-muted/20 to-muted/5"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-primary/20 rounded-full" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }} animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }} transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3
        }} />)}
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" animate={{
            textShadow: ["0 0 0px hsl(var(--primary) / 0)", "0 0 20px hsl(var(--primary) / 0.3)", "0 0 0px hsl(var(--primary) / 0)"]
          }} transition={{
            duration: 3,
            repeat: Infinity
          }}>
              About Our{' '}
              <span className="bg-gradient-earth bg-clip-text text-transparent">
                Mission
              </span>
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground mb-8 text-balance" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }}>
              We are a global community of environmental advocates, scientists, and changemakers 
              dedicated to building a sustainable future for our planet.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }}>
              <Badge variant="secondary" className="text-sm px-4 py-2 hover-pulse bg-gradient-to-r from-secondary/20 to-primary/20 border-primary/30">
                Founded in 2020 • 500K+ Members Worldwide
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <Card className="p-8 h-full border-none bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden group shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] transition-all duration-500">
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-primary/30 rounded-full" style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`
                }} animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5]
                }} transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }} />)}
                </div>

                {/* Animated gradient overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100" transition={{
                duration: 0.5
              }} />

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4">
                  <motion.div animate={{
                  rotate: 360
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} className="w-8 h-8 border-2 border-primary/20 rounded-full" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <motion.div animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} className="w-2 h-2 bg-primary/40 rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }} transition={{
                    type: "spring",
                    stiffness: 300
                  }}>
                      <Compass className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h2 className="text-3xl font-bold text-primary" animate={{
                    textShadow: ["0 0 0px hsl(var(--primary) / 0)", "0 0 20px hsl(var(--primary) / 0.4)", "0 0 0px hsl(var(--primary) / 0)"]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity
                  }}>
                      Our Mission
                    </motion.h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To mobilize global action against climate change through innovative solutions, 
                      community engagement, and environmental education that creates lasting impact 
                      for our planet and future generations.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe that meaningful environmental change happens when communities, 
                      technology, and policy work together toward common goals.
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>Global Impact</span>
                      
                    </div>
                    <div className="w-full bg-primary/10 rounded-full h-2">
                      <motion.div className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full" initial={{
                      width: 0
                    }} whileInView={{
                      width: "85%"
                    }} transition={{
                      duration: 2,
                      delay: 0.5
                    }} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <Card className="p-8 h-full border-none bg-gradient-to-br from-secondary/10 via-accent/5 to-background relative overflow-hidden group shadow-[0_0_30px_hsl(var(--secondary)/0.2)] hover:shadow-[0_0_50px_hsl(var(--secondary)/0.4)] transition-all duration-500">
                {/* Floating sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute" style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`
                }} animate={{
                  rotate: [0, 360],
                  scale: [0.5, 1, 0.5],
                  opacity: [0.2, 0.6, 0.2]
                }} transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}>
                      <Sparkles className="w-3 h-3 text-secondary/40" />
                    </motion.div>)}
                </div>

                {/* Animated gradient overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-l from-secondary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100" transition={{
                duration: 0.5
              }} />

                {/* Decorative elements */}
                <div className="absolute top-4 left-4">
                  <motion.div animate={{
                  boxShadow: ["0 0 0px hsl(var(--secondary) / 0.3)", "0 0 20px hsl(var(--secondary) / 0.6)", "0 0 0px hsl(var(--secondary) / 0.3)"]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} className="w-6 h-6 bg-secondary/30 rounded-full" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <motion.div animate={{
                  y: [0, -5, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }} className="w-3 h-8 bg-gradient-to-t from-secondary/20 to-transparent rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden" whileHover={{
                    scale: 1.1,
                    rotate: -5
                  }} transition={{
                    type: "spring",
                    stiffness: 300
                  }}>
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{
                      x: ['-100%', '100%']
                    }} transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }} />
                      <Lightbulb className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    <motion.h2 className="text-3xl font-bold text-secondary" animate={{
                    textShadow: ["0 0 0px hsl(var(--secondary) / 0)", "0 0 20px hsl(var(--secondary) / 0.4)", "0 0 0px hsl(var(--secondary) / 0)"]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1
                  }}>
                      Our Vision
                    </motion.h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A world where humanity lives in harmony with nature, powered by clean energy, 
                      sustained by healthy ecosystems, and guided by environmental stewardship 
                      at every level of society.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      We envision communities that thrive while protecting the environment, 
                      creating a legacy of sustainability for generations to come.
                    </p>
                  </div>

                  {/* Interactive vision elements */}
                  <div className="mt-6 pt-4">
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div className="group cursor-pointer p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-300" whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }}>
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div animate={{
                          rotate: [0, 360]
                        }} transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}>
                            <Globe className="w-4 h-4 text-secondary" />
                          </motion.div>
                          <span className="text-sm font-medium text-secondary">Global Reach</span>
                        </div>
                        <motion.div className="w-full h-1 bg-secondary/20 rounded-full overflow-hidden" whileHover={{
                        height: "6px"
                      }}>
                          <motion.div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full" initial={{
                          width: "0%"
                        }} whileInView={{
                          width: "90%"
                        }} transition={{
                          duration: 2,
                          delay: 0.5
                        }} />
                        </motion.div>
                      </motion.div>

                      <motion.div className="group cursor-pointer p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-300" whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }}>
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }} transition={{
                          duration: 2,
                          repeat: Infinity
                        }}>
                            <Sparkles className="w-4 h-4 text-accent" />
                          </motion.div>
                          <span className="text-sm font-medium text-accent">Innovation</span>
                        </div>
                        <motion.div className="w-full h-1 bg-accent/20 rounded-full overflow-hidden" whileHover={{
                        height: "6px"
                      }}>
                          <motion.div className="h-full bg-gradient-to-r from-accent to-secondary rounded-full" initial={{
                          width: "0%"
                        }} whileInView={{
                          width: "85%"
                        }} transition={{
                          duration: 2,
                          delay: 0.8
                        }} />
                        </motion.div>
                      </motion.div>

                      <motion.div className="group cursor-pointer p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 col-span-2" whileHover={{
                      scale: 1.02
                    }} whileTap={{
                      scale: 0.98
                    }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.div animate={{
                            y: [0, -3, 0]
                          }} transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1
                          }}>
                              <Target className="w-4 h-4 text-primary" />
                            </motion.div>
                            <span className="text-sm font-medium text-primary">Sustainable Future</span>
                          </div>
                          
                        </div>
                        <motion.div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden mt-2" whileHover={{
                        height: "6px"
                      }}>
                          <motion.div className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full" initial={{
                          width: "0%"
                        }} whileInView={{
                          width: "95%"
                        }} transition={{
                          duration: 2,
                          delay: 1.1
                        }} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      

      {/* Leadership Cards - President Only */}
      <LeadershipCards />

      {/* Pledge for Future & Eco News Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Take{' '}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of others in making a pledge for environmental action and stay updated with the latest eco-news.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <PledgeForFuture />
            <EcoNewsUpdates />
          </div>
        </div>
      </section>

      {/* Carbon Footprint Calculator */}
      <CarbonFootprintSection />

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and unite our global community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }}>
                <Card className={`p-6 h-full shadow-card border-none bg-gradient-to-br ${value.color} hover:shadow-soft hover-lift transition-all duration-300 interactive-card relative overflow-hidden`}>
                  {/* Animated shimmer effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0" animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Climate Action Clock Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Real-Time Climate Status
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor the urgent countdown to climate action targets and track key environmental metrics.
            </p>
          </motion.div>
          <ClimateActionClock />
          
          {/* Climate Data Statistics - Below Clock */}
          <ClimateDataSection />
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutPage;