import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Users, Award, MapPin, ExternalLink, Sparkles } from "lucide-react";

const CollaboratorsPage = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const mentorRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  const mentorInView = useInView(mentorRef, { once: true });

  const partnerships = [
    {
      id: "jbcn",
      title: "JBCN",
      description: "Leading the way in climate education",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: "tag",
      title: "Take Action Global",
      description: "Connecting schools worldwide",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-600",
      subNodes: [
        {
          title: "Climate Action Project",
          url: "https://www.climateactionproject.org/",
          description: "A one-month global programme where students collaborate internationally to design actionable solutions."
        },
        {
          title: "Climate Action School",
          description: "A year-long school programme. JBCN has been recognised three years in a row for its commitment.",
          hasCertificate: true
        }
      ]
    },
    {
      id: "ciu",
      title: "CIU – Change In Us",
      description: "Driving local Mumbai-based initiatives",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "impact",
      title: "Global Impact",
      description: "Creating measurable change worldwide",
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 nature-gradient opacity-10" />
        
        {/* Animated Earth Background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-600/20 blur-xl" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Together for a Greener Planet
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            JBCN partners with world leaders to empower students in driving real climate action.
          </motion.p>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="text-primary/60 mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to Explore
            </motion.div>
            <motion.div
              className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-primary/60 rounded-full mt-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* Partnership Timeline */}
      <section ref={timelineRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Partnership Journey
          </motion.h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500 opacity-30" />
            
            <div className="space-y-16">
              {partnerships.map((partnership, index) => (
                <motion.div
                  key={partnership.id}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={`w-96 hover-lift transition-smooth group cursor-pointer ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <CardContent className="p-6">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`p-3 rounded-full bg-gradient-to-r ${partnership.gradient} text-white mr-4`}>
                          {partnership.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{partnership.title}</h3>
                          <p className="text-muted-foreground">{partnership.description}</p>
                        </div>
                      </div>

                      {partnership.subNodes && (
                        <div className="space-y-4 mt-6">
                          {partnership.subNodes.map((subNode, subIndex) => (
                            <motion.div
                              key={subIndex}
                              className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-smooth"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-primary">{subNode.title}</h4>
                                {subNode.url && (
                                  <a
                                    href={subNode.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">{subNode.description}</p>
                              {subNode.hasCertificate && (
                                <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50">
                                  <img
                                    src="/lovable-uploads/climate-action-certificate.jpg"
                                    alt="Climate Action Schools Certificate 2024-2025"
                                    className="w-full rounded shadow-card"
                                  />
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {partnership.id === "ciu" && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-lg border border-cyan-200/50 dark:border-cyan-800/50 relative overflow-hidden">
                          <div className="absolute right-0 top-0 opacity-10">
                            <MapPin className="w-16 h-16" />
                          </div>
                          <div className="flex items-center mb-3">
                            <img
                              src="/lovable-uploads/ciu-logo.png"
                              alt="Change In Us Logo"
                              className="w-12 h-12 mr-3"
                            />
                            <div>
                              <h4 className="font-semibold">Mumbai Initiatives</h4>
                              <p className="text-sm text-muted-foreground">Local climate action</p>
                            </div>
                          </div>
                          <p className="text-sm">
                            Driving local change: JBCN partners with CIU to launch Mumbai-based climate initiatives that inspire young changemakers.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 border-4 border-background shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Spotlight */}
      <section ref={mentorRef} className="py-20 px-4 bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={mentorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Mentor Spotlight
          </motion.h2>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mentorInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-8 hover-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10" />
              
              {/* Pulse Animation Border */}
              <motion.div
                className="absolute inset-0 border-2 border-gradient-to-r from-amber-400 to-orange-500 rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-elegant relative">
                      <img
                        src="/lovable-uploads/gagandeep-sir.jpg"
                        alt="Gagandeep Sir"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-16 h-16"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <img
                        src="/lovable-uploads/mentor-badge.png"
                        alt="Mentor Badge"
                        className="w-full h-full drop-shadow-lg"
                      />
                    </motion.div>
                  </motion.div>

                  <div className="flex-1 text-left">
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      Gagandeep Sir
                    </h3>
                    <p className="text-xl text-primary mb-4">
                      Mentor for JBCN and National Leader of the Climate Action Project in India
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Guides 10 of India's top schools in driving climate action. As a dedicated leader in environmental education, 
                      Gagandeep Sir has been instrumental in shaping the climate consciousness of countless students across the nation.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              Join the Movement
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Be part of the global climate action network that's creating real change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/initiatives">Our Initiatives</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaboratorsPage;