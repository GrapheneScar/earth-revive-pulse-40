import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnershipCard from "@/components/PartnershipCard";
import PartnershipFlow from "@/components/PartnershipFlow";
import EnhancedMentorCard from "@/components/EnhancedMentorCard";
import { Globe, Users, Award, MapPin, ExternalLink, Sparkles, TreePine, Target, Calendar, Building2, Leaf } from "lucide-react";

const CollaboratorsPage = () => {
  const heroRef = useRef(null);
  const partnershipsRef = useRef(null);
  const mentorRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const partnershipsInView = useInView(partnershipsRef, { once: true });
  const mentorInView = useInView(mentorRef, { once: true });


  const partnerships = [
    {
      title: "JBCN International School, Parel",
      description: "Pioneer in Climate Education Excellence",
      details: "JBCN International School, Parel stands as a beacon of environmental consciousness in Mumbai's educational landscape. Our school has pioneered innovative climate education programs that integrate sustainability into every aspect of learning, from curriculum design to campus operations.",
      achievements: [
        "First school in Mumbai to achieve carbon-neutral status",
        "Winner of 'Green School of the Year' award 2023",
        "Reduced campus energy consumption by 40% through student-led initiatives",
        "Established Mumbai's first student-run environmental research lab"
      ],
      stats: [
        { label: "Students Engaged", value: "1,200+" },
        { label: "CO₂ Reduced", value: "15 tons" },
        { label: "Years Active", value: "8+" },
        { label: "Projects", value: "50+" }
      ],
      badges: ["Carbon Neutral", "Green Campus", "Innovation Leader"],
      icon: <TreePine className="w-12 h-12" />,
      gradient: "from-emerald-500 via-green-600 to-teal-600"
    },
    {
      title: "Take Action Global (TAG)",
      description: "Global Network for Climate Action",
      details: "Take Action Global is a revolutionary platform connecting over 500 schools across 40 countries in the fight against climate change. Through cutting-edge technology and collaborative learning, TAG empowers students to become climate champions in their communities.",
      achievements: [
        "Connected 500+ schools across 40 countries",
        "Facilitated 10,000+ international student collaborations",
        "Launched virtual climate labs in 25 languages",
        "Created the world's largest student climate action database"
      ],
      stats: [
        { label: "Schools", value: "500+" },
        { label: "Countries", value: "40" },
        { label: "Students", value: "50,000+" },
        { label: "Projects", value: "2,500+" }
      ],
      links: [
        { title: "Visit Global Platform", url: "https://www.takeactionglobal.org/" },
        { title: "Join the Network", url: "https://www.takeactionglobal.org/join" }
      ],
      badges: ["Global Network", "Technology Leader", "Student-Centered"],
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-blue-500 via-cyan-600 to-teal-600"
    },
    {
      title: "Climate Action Project (CAP)",
      description: "One-Month Global Collaboration Program",
      details: "The Climate Action Project is an intensive, month-long global collaboration where students from different continents work together to design and implement real-world climate solutions. This program has revolutionized how young people approach environmental challenges through peer-to-peer learning.",
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
        { title: "Explore Projects", url: "https://www.climateactionproject.org/" },
        { title: "Register Now", url: "https://www.climateactionproject.org/register" }
      ],
      badges: ["UN Partnership", "Global Impact", "Innovation Hub"],
      icon: <Target className="w-12 h-12" />,
      gradient: "from-purple-500 via-indigo-600 to-blue-600"
    },
    {
      title: "Climate Action Schools Recognition",
      description: "Three-Year Excellence Award",
      details: "JBCN has achieved the prestigious Climate Action Schools recognition for three consecutive years (2022-2025), demonstrating unwavering commitment to environmental education. This certification recognizes schools that integrate climate action into their core curriculum and demonstrate measurable environmental impact.",
      achievements: [
        "Three consecutive years of recognition (2022-2025)",
        "Only school in Maharashtra with this achievement",
        "Mentored 15 other schools to achieve certification",
        "Developed curriculum framework adopted by 50+ schools"
      ],
      stats: [
        { label: "Recognition Years", value: "3" },
        { label: "Curriculum Impact", value: "50+ Schools" },
        { label: "Mentoring Success", value: "15 Schools" },
        { label: "Global Ranking", value: "Top 5%" }
      ],
      image: "/lovable-uploads/climate-action-certificate.jpg",
      badges: ["Certified Excellence", "Curriculum Leader", "Mentoring Hub"],
      icon: <Award className="w-12 h-12" />,
      gradient: "from-amber-500 via-orange-600 to-red-600"
    },
    {
      title: "Change In Us (CIU)",
      description: "Mumbai's Climate Action Movement",
      details: "Change In Us is a grassroots organization driving local climate action across Mumbai. Through community workshops, policy advocacy, and youth engagement programs, CIU has transformed how Mumbai's citizens approach environmental challenges.",
      achievements: [
        "Organized 200+ community climate workshops",
        "Planted 10,000+ trees across Mumbai",
        "Influenced 5 municipal policy changes",
        "Trained 500+ youth climate ambassadors"
      ],
      stats: [
        { label: "Workshops", value: "200+" },
        { label: "Trees Planted", value: "10K+" },
        { label: "Policies Changed", value: "5" },
        { label: "Youth Trained", value: "500+" }
      ],
      logo: "/lovable-uploads/ciu-logo.png",
      badges: ["Community Leader", "Policy Influencer", "Local Impact"],
      icon: <Building2 className="w-12 h-12" />,
      gradient: "from-green-500 via-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
        
        {/* Multiple Animated Earth Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-600/20 blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-600/15 blur-3xl"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ 
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Leaf className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-600 font-medium">Global Climate Partnership Network</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Together for a
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Greener Planet
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            JBCN partners with world leaders, innovative organizations, and passionate changemakers to empower students in driving <span className="text-primary font-semibold">real climate action</span> across the globe.
          </motion.p>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="text-primary/70 mb-4 flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Discover Our Impact Stories
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <motion.div
              className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-primary/60 rounded-full mt-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-emerald-400/40' : 
              i % 3 === 1 ? 'bg-teal-400/40' : 'bg-cyan-400/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </section>

      {/* Partnership Network Layout */}
      <section ref={partnershipsRef} className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Top Row - JBCN × TAG */}
          <div className="flex items-center justify-center mb-24">
            {/* JBCN Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -100 }}
              animate={partnershipsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="w-80 h-72 bg-gradient-to-br from-emerald-50 via-emerald-100 to-teal-50 border-emerald-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-300 rounded-full blur-xl"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-teal-300 rounded-full blur-lg"></div>
                </div>
                
                <CardContent className="p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <TreePine className="w-8 h-8 text-emerald-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-800 group-hover:text-emerald-900 transition-colors">JBCN International</h3>
                      <p className="text-xs text-emerald-600 font-medium">Parel, Mumbai</p>
                    </div>
                  </div>
                  
                  <p className="text-emerald-700 text-sm mb-4 flex-1 leading-relaxed">
                    Pioneer in Climate Education Excellence. Leading India's first carbon-neutral school initiative with student-driven sustainability programs.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <motion.div 
                      className="text-center p-2 bg-emerald-50 rounded-lg border border-emerald-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-lg font-bold text-emerald-800">1,200+</div>
                      <div className="text-xs text-emerald-600">Students Engaged</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-2 bg-emerald-50 rounded-lg border border-emerald-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-lg font-bold text-emerald-800">8+</div>
                      <div className="text-xs text-emerald-600">Years Active</div>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-1 justify-center">
                    <div className="px-2 py-1 bg-emerald-200 text-emerald-800 text-xs rounded-full font-medium">Carbon Neutral</div>
                    <div className="px-2 py-1 bg-teal-200 text-teal-800 text-xs rounded-full font-medium">Award Winner</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* × Symbol */}
            <motion.div
              className="mx-16 text-6xl font-bold text-primary/40"
              initial={{ opacity: 0, scale: 0 }}
              animate={partnershipsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ×
            </motion.div>

            {/* TAG Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: 100 }}
              animate={partnershipsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
            >
              <Card className="w-80 h-72 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-cyan-300 rounded-full blur-lg"></div>
                </div>
                
                <CardContent className="p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300"
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Globe className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors">Take Action Global</h3>
                      <p className="text-xs text-blue-600 font-medium">Global Network</p>
                    </div>
                  </div>
                  
                  <p className="text-blue-700 text-sm mb-4 flex-1 leading-relaxed">
                    Revolutionary platform connecting schools worldwide for climate action through cutting-edge technology and collaborative learning.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <motion.div 
                      className="text-center p-2 bg-blue-50 rounded-lg border border-blue-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-lg font-bold text-blue-800">500+</div>
                      <div className="text-xs text-blue-600">Schools Connected</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-2 bg-blue-50 rounded-lg border border-blue-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-lg font-bold text-blue-800">40</div>
                      <div className="text-xs text-blue-600">Countries</div>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-1 justify-center">
                    <div className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full font-medium">Global Network</div>
                    <div className="px-2 py-1 bg-cyan-200 text-cyan-800 text-xs rounded-full font-medium">Tech Leader</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Animated Branches */}
          <div className="relative flex justify-center mb-16">
            <motion.svg
              width="400"
              height="120"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={partnershipsInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Central trunk */}
              <motion.line
                x1="200"
                y1="0"
                x2="200"
                y2="60"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={partnershipsInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              />
              
              {/* Left branch */}
              <motion.line
                x1="200"
                y1="60"
                x2="120"
                y2="120"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={partnershipsInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              
              {/* Right branch */}
              <motion.line
                x1="200"
                y1="60"
                x2="280"
                y2="120"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={partnershipsInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              
              {/* Animated dots */}
              <motion.circle
                cx="200"
                cy="60"
                r="6"
                fill="hsl(var(--primary))"
                initial={{ scale: 0 }}
                animate={partnershipsInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.6 }}
              />
            </motion.svg>
          </div>

          {/* Bottom Row - CAP & Climate Action Schools */}
          <div className="flex items-center justify-between gap-16">
            {/* Climate Action Project Card */}
            <motion.div
              className="group relative flex-1"
              initial={{ opacity: 0, y: 100 }}
              animate={partnershipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
            >
              <Card className="h-80 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-purple-300 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-300 rounded-full blur-lg"></div>
                </div>
                
                <CardContent className="p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                    >
                      <Target className="w-8 h-8 text-purple-600" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-800 group-hover:text-purple-900 transition-colors">Climate Action Project</h3>
                      <p className="text-xs text-purple-600 font-medium">Global Collaboration Program</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-700 text-sm mb-4 flex-1 leading-relaxed">
                    Intensive month-long global collaboration where students from different continents design and implement real climate solutions through peer-to-peer learning.
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <motion.div 
                      className="flex justify-between items-center p-2 bg-purple-50 rounded-lg border border-purple-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-xs text-purple-600">Participants</span>
                      <span className="text-lg font-bold text-purple-800">100K+</span>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center p-2 bg-purple-50 rounded-lg border border-purple-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-xs text-purple-600">Languages</span>
                      <span className="text-lg font-bold text-purple-800">30+</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-1 justify-center flex-wrap">
                    <div className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full font-medium">UNESCO Partner</div>
                    <div className="px-2 py-1 bg-indigo-200 text-indigo-800 text-xs rounded-full font-medium">Global Impact</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Climate Action Schools Recognition Card */}
            <motion.div
              className="group relative flex-1"
              initial={{ opacity: 0, y: 100 }}
              animate={partnershipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.05, rotateX: -5 }}
            >
              <Card className="h-80 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-20 h-20 bg-amber-300 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-orange-300 rounded-full blur-lg"></div>
                </div>
                
                {/* Certificate Image */}
                <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
                  <img 
                    src="/lovable-uploads/climate-action-certificate.jpg" 
                    alt="Certificate" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <CardContent className="p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: -15 }}
                    >
                      <Award className="w-8 h-8 text-amber-600" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors">Climate Action Schools</h3>
                      <p className="text-xs text-amber-600 font-medium">Excellence Recognition Program</p>
                    </div>
                  </div>
                  
                  <p className="text-amber-700 text-sm mb-4 flex-1 leading-relaxed">
                    Prestigious recognition for three consecutive years (2022-2025) demonstrating unwavering commitment to environmental education and measurable impact.
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <motion.div 
                      className="flex justify-between items-center p-2 bg-amber-50 rounded-lg border border-amber-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-xs text-amber-600">Recognition Years</span>
                      <span className="text-lg font-bold text-amber-800">3 Consecutive</span>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center p-2 bg-amber-50 rounded-lg border border-amber-100"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-xs text-amber-600">Global Ranking</span>
                      <span className="text-lg font-bold text-amber-800">Top 5%</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-1 justify-center flex-wrap">
                    <div className="px-2 py-1 bg-amber-200 text-amber-800 text-xs rounded-full font-medium">Certified Excellence</div>
                    <div className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full font-medium">Leader</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Mentor Spotlight */}
      <section ref={mentorRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={mentorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Visionary Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the exceptional leader driving India's climate education revolution and inspiring the next generation of environmental champions
            </p>
          </motion.div>

          <EnhancedMentorCard />
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              Join the Movement
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Be part of the global climate action network that's creating real, measurable change. Together, we're building a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 text-lg">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                <Link to="/initiatives">Explore Our Work</Link>
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