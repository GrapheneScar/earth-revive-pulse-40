import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnhancedMentorCard from "@/components/EnhancedMentorCard";
import { Globe, Users, Award, ExternalLink, TreePine, Target, ArrowDown, Zap, Building2, Leaf } from "lucide-react";

const CollaboratorsPage = () => {
  const heroRef = useRef(null);
  const partnershipsRef = useRef(null);
  const certificateRef = useRef(null);
  const mentorRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const partnershipsInView = useInView(partnershipsRef, { once: true });
  const certificateInView = useInView(certificateRef, { once: true });
  const mentorInView = useInView(mentorRef, { once: true });

  const partnerships = [
    {
      id: "jbcn",
      title: "JBCN International School",
      subtitle: "Parel, Mumbai",
      description: "Pioneer in Climate Education Excellence",
      details: "JBCN International School stands as a beacon of environmental consciousness in Mumbai's educational landscape. Our school has pioneered innovative climate education programs that integrate sustainability into every aspect of learning, creating award-winning initiatives that have reduced campus emissions while engaging over 1,200 students in meaningful climate action.",
      logo: "/logos/jbcn-logo.png",
      achievements: [
        "First school in Mumbai to achieve carbon-neutral status",
        "Winner of 'Green School of the Year' award 2023",
        "Reduced campus energy consumption by 40%",
        "Established Mumbai's first student-run environmental research lab"
      ],
      stats: [
        { label: "Students Engaged", value: "1,200+" },
        { label: "CO₂ Reduced", value: "15 tons" },
        { label: "Years Active", value: "8+" },
        { label: "Projects", value: "50+" }
      ],
      badges: ["Carbon Neutral", "Green Campus", "Innovation Leader"],
      icon: <TreePine className="w-8 h-8" />,
      color: "primary"
    },
    {
      id: "tag",
      title: "Take Action Global",
      subtitle: "Global Climate Network",
      description: "Connecting Schools Worldwide for Climate Action",
      details: "Take Action Global is a revolutionary platform that connects over 500 schools across 40 countries in the fight against climate change. Through cutting-edge technology and collaborative learning experiences, TAG empowers students to become climate champions in their communities, facilitating thousands of international collaborations and creating the world's largest student climate database.",
      logo: "/logos/tag-logo.png",
      achievements: [
        "Connected 500+ schools across 40 countries",
        "Facilitated 10,000+ international collaborations",
        "Launched virtual climate labs in 25 languages",
        "Created world's largest student climate database"
      ],
      stats: [
        { label: "Schools", value: "500+" },
        { label: "Countries", value: "40" },
        { label: "Students", value: "50,000+" },
        { label: "Projects", value: "2,500+" }
      ],
      links: [
        { title: "Visit Platform", url: "https://www.takeactionglobal.org/" }
      ],
      badges: ["Global Network", "Technology Leader", "Student-Centered"],
      icon: <Globe className="w-8 h-8" />,
      color: "secondary"
    },
    {
      id: "cap",
      title: "Climate Action Project",
      subtitle: "Global Collaboration Program",
      description: "One-Month Intensive Climate Solutions",
      details: "The Climate Action Project is an intensive, month-long global collaboration where students from different continents work together to design and implement real-world climate solutions. This groundbreaking program has engaged over 100,000 students across three years, generating 500+ actionable climate solutions and creating strategic partnerships with UNESCO and UNICEF.",
      logo: "/logos/climate-action-project-logo.png",
      achievements: [
        "Engaged 100,000+ students in 3 years",
        "Generated 500+ actionable climate solutions",
        "Translated materials into 30+ languages",
        "Created partnerships with UNESCO and UNICEF"
      ],
      stats: [
        { label: "Participants", value: "100K+" },
        { label: "Solutions", value: "500+" },
        { label: "Languages", value: "30+" },
        { label: "Success Rate", value: "95%" }
      ],
      links: [
        { title: "Explore Projects", url: "https://www.climateactionproject.org/" }
      ],
      badges: ["UN Partnership", "Global Impact", "Innovation Hub"],
      icon: <Target className="w-8 h-8" />,
      color: "accent"
    },
    {
      id: "cas",
      title: "Climate Action Schools",
      subtitle: "Recognition Program",
      description: "Three-Year Excellence Award",
      details: "JBCN has achieved the prestigious Climate Action Schools recognition for three consecutive years (2022-2025), demonstrating unwavering commitment to environmental education and measurable impact. As the only school in Maharashtra with this achievement, JBCN has mentored 15 other schools and developed curriculum frameworks adopted by 50+ institutions.",
      logo: "/logos/climate-action-schools-logo.png",
      achievements: [
        "Three consecutive years of recognition (2022-2025)",
        "Only school in Maharashtra with this achievement",
        "Mentored 15 other schools to achieve certification",
        "Developed curriculum framework adopted by 50+ schools"
      ],
      stats: [
        { label: "Recognition Years", value: "3" },
        { label: "Schools Mentored", value: "15" },
        { label: "Curriculum Reach", value: "50+" },
        { label: "Impact Score", value: "A+" }
      ],
      badges: ["Excellence Award", "Mentorship Leader", "Curriculum Pioneer"],
      icon: <Award className="w-8 h-8" />,
      color: "primary"
    },
    {
      id: "ciu",
      title: "Change Is Us",
      subtitle: "Student Climate Initiative",
      description: "Empowering Youth Climate Action",
      details: "Change Is Us is a dynamic student-led initiative that empowers young people to take meaningful climate action in their communities. Through comprehensive education programs, passionate advocacy, and hands-on environmental projects, this initiative has mobilized over 5,000 students across India, organized 100+ community cleanup drives, and planted 10,000+ trees in urban areas.",
      logo: "/logos/ciu-logo.png",
      achievements: [
        "Mobilized 5,000+ students across India",
        "Organized 100+ community cleanup drives",
        "Planted 10,000+ trees in urban areas",
        "Reached 50,000+ people through awareness campaigns"
      ],
      stats: [
        { label: "Students Mobilized", value: "5,000+" },
        { label: "Cleanup Drives", value: "100+" },
        { label: "Trees Planted", value: "10K+" },
        { label: "People Reached", value: "50K+" }
      ],
      badges: ["Student-Led", "Community Impact", "Environmental Action"],
      icon: <Users className="w-8 h-8" />,
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6"
            >
              <Globe className="w-10 h-10 text-primary" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Our Global Network
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Collaborating with world-class organizations to drive <span className="text-primary font-semibold">climate action</span> and <span className="text-secondary font-semibold">environmental education</span> across the globe.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>150,000+ Students Engaged</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                <span>40+ Countries Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>Multiple Global Recognitions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Network Section */}
      <section ref={partnershipsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={partnershipsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Partnership Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building bridges across continents to create a sustainable future through collaborative climate action.
            </p>
          </motion.div>

          {/* Horizontal Partnership Cards */}
          <div className="space-y-12">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={partnershipsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 hover:shadow-glow group">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Logo Section */}
                      <div className="lg:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                        <div className="relative">
                          <img
                            src={partnership.logo}
                            alt={`${partnership.title} logo`}
                            className="w-full max-w-[200px] h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-2/3 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <CardTitle className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                              {partnership.title}
                            </CardTitle>
                            <CardDescription className="text-lg text-muted-foreground mb-4">
                              {partnership.subtitle}
                            </CardDescription>
                          </div>
                          <div className={`p-3 rounded-full bg-${partnership.color}/20`}>
                            {partnership.icon}
                          </div>
                        </div>

                        <p className="text-foreground/90 mb-6 leading-relaxed">
                          {partnership.details}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {partnership.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center p-3 bg-card/50 rounded-lg">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {partnership.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        {partnership.links && (
                          <div className="flex flex-wrap gap-3">
                            {partnership.links.map((link, linkIndex) => (
                              <Button
                                key={linkIndex}
                                asChild
                                variant="outline"
                                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                              >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  {link.title}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection Flow - Only between JBCN and TAG */}
                {partnership.id === "jbcn" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={partnershipsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 border border-primary/30">
                        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
                      </div>
                      <div className="mt-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                        <span className="text-sm font-semibold text-primary">
                          JBCN × TAG Partnership
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Action Certificate Section */}
      <section ref={certificateRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={certificateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {/* Certificate Image - Full Width */}
                  <div className="w-full relative">
                    <img
                      src="/public/lovable-uploads/climate-action-certificate.jpg"
                      alt="Climate Action Certificate"
                      className="w-full h-auto object-contain max-h-[600px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Certificate Details - Below Image */}
                  <div className="w-full p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={certificateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-4xl mx-auto text-center"
                    >
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-primary/20">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Climate Action Certificate
                          </CardTitle>
                          <CardDescription className="text-lg md:text-xl text-muted-foreground">
                            Three Years of Excellence (2022-2025)
                          </CardDescription>
                        </div>
                      </div>

                      <p className="text-foreground/90 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
                        This prestigious certification recognizes JBCN International School's outstanding commitment to climate education and environmental stewardship. Our comprehensive approach integrates sustainability across curriculum, operations, and community engagement, making us a leader in climate action education.
                      </p>

                      {/* Achievement Highlights */}
                      <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-3 p-4 bg-primary/10 rounded-lg">
                          <Leaf className="w-6 h-6 text-primary" />
                          <span className="text-foreground text-center">Carbon-neutral campus operations since 2022</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-4 bg-secondary/10 rounded-lg">
                          <Building2 className="w-6 h-6 text-secondary" />
                          <span className="text-foreground text-center">Mentored 15+ schools in sustainability practices</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-4 bg-accent/10 rounded-lg">
                          <Zap className="w-6 h-6 text-accent" />
                          <span className="text-foreground text-center">40% reduction in energy consumption</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 font-semibold">
                          Excellence Award
                        </span>
                        <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full border border-secondary/30 font-semibold">
                          3 Years Running
                        </span>
                        <span className="px-4 py-2 bg-accent/20 text-accent rounded-full border border-accent/30 font-semibold">
                          Maharashtra First
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mentor Section */}
      <section ref={mentorRef} className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mentorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Leadership & Mentorship
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by visionary leaders who inspire the next generation of climate champions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mentorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <EnhancedMentorCard />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Join the Movement
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Be part of our global network of climate champions. Together, we can create meaningful change for our planet's future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              >
                <a href="/contact">Partner With Us</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/initiatives">Explore Initiatives</a>
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