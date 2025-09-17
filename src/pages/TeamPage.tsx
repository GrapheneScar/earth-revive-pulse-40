import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Star, Users, Palette, Camera, Target, MessageCircle, Code, Mail, Sparkles, Heart, Award, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const TeamPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  // Leadership Team - The Core
  const leadership = [{
    name: "Prishti Sangani",
    role: "President",
    icon: Crown,
    title: "Leading the Vision",
    description: "As President of the Climate Action Project, I'm dedicated to inspiring global environmental leadership and creating transformative solutions that address our planet's most pressing challenges.",
    gradient: "from-yellow-400/20 via-orange-500/20 to-red-500/20",
    iconColor: "text-yellow-500",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    category: "leadership",
    skills: ["Strategic Leadership", "Environmental Policy"],
    achievements: ["Environmental Leadership Award", "Youth Climate Ambassador", "Published Researcher"],
    quote: "Every action counts in our fight for a sustainable future.",
    image: "/lovable-uploads/354b055f-8da4-4c2f-8205-6df4f43db47a.png"
  }, {
    name: "Aastha Borkar",
    role: "Vice President",
    icon: Star,
    title: "Strategic Operations",
    description: "Leading strategic planning and community engagement to ensure every project creates lasting impact while empowering students to become confident environmental leaders.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "leadership",
    skills: ["Operations Management", "Strategic Planning"],
    achievements: ["Operations Excellence", "Community Builder", "Strategic Planner"],
    quote: "Strategy without execution is just a wish.",
    image: "/lovable-uploads/33fea22c-785c-4f6a-82b8-b825b0d6f3a3.png"
  }, {
    name: "Tiya Chopra",
    role: "Vice President",
    icon: Users,
    title: "Community Outreach",
    description: "Building bridges between schools, organizations, and communities worldwide through innovative outreach initiatives that multiply our collective environmental impact.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "leadership",
    skills: ["Community Building", "Partnership Development"],
    achievements: ["Global Connector", "Partnership Developer", "Community Advocate"],
    quote: "Together we can create waves of positive change.",
    image: "/lovable-uploads/9ab57c9f-653a-4b7e-b6c9-a4773810f8f9.png"
  }];

  // Department Heads - The Specialists
  const departmentHeads = [{
    name: "Chesha Karia",
    role: "Design Head",
    icon: Palette,
    department: "Creative",
    description: "Leading visual identity and user experience design to make environmental awareness engaging and accessible to all audiences.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "creative",
    skills: ["UI/UX Design", "Brand Identity", "Creative Direction", "Visual Storytelling"],
    projects: "15+ Design Projects",
    image: "/lovable-uploads/0258641a-e856-4804-8881-042244ae3ea8.png"
  }, {
    name: "Jash Shah",
    role: "Photography Head",
    icon: Camera,
    department: "Creative",
    description: "Capturing the beauty of nature and the impact of our environmental initiatives through compelling visual storytelling and documentation.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "creative",
    skills: ["Environmental Photography", "Event Documentation", "Social Media Content", "Visual Storytelling"],
    projects: "500+ Photos Captured",
    image: "/lovable-uploads/0c5a70c8-f770-490d-a259-1dfa344194bb.png"
  }, {
    name: "Yuvna Lamba",
    role: "Project Head",
    icon: Target,
    department: "Operations",
    description: "Coordinating and managing environmental initiatives from conception to completion, ensuring maximum impact and community engagement.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "operations",
    skills: ["Project Management", "Team Coordination", "Impact Assessment", "Resource Planning"],
    projects: "25+ Projects Managed",
    image: "/lovable-uploads/03b0b31a-2e7a-45c0-ba61-0674f9ac0b86.png"
  }, {
    name: "Vaishnavi Nishanth",
    role: "Deputy Project Head",
    icon: Target,
    department: "Operations",
    description: "Supporting project coordination and ensuring seamless execution of environmental initiatives while fostering team collaboration and strategic planning.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "operations",
    skills: ["Project Support", "Team Coordination", "Strategic Planning", "Quality Assurance"],
    projects: "15+ Projects Assisted",
    image: "/lovable-uploads/7b7507a5-84b5-4046-8f57-b662d2b285cc.png"
  }, {
    name: "Navyapriya Baid",
    role: "Social Media Co-Head",
    icon: MessageCircle,
    department: "Digital",
    description: "Amplifying our environmental message across digital platforms and building engaged communities around climate action and sustainability.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "digital-tech",
    skills: ["Social Media Strategy", "Content Creation", "Community Management", "Digital Marketing"],
    projects: "100K+ Followers Reached",
    image: "/lovable-uploads/d675ad8f-b130-4226-8095-76e2a0fc5885.png"
  }, {
    name: "Anushka Shinde",
    role: "Social Media Co-Head",
    icon: MessageCircle,
    department: "Digital",
    description: "Creating engaging content and managing digital communities to spread awareness about environmental issues and inspire collective action.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "digital-tech",
    skills: ["Content Creation", "Social Media Management", "Visual Design", "Community Engagement"],
    projects: "50K+ Engagement Generated",
    image: "/lovable-uploads/06c99bab-5b4e-4d00-a994-3445f8a81c80.png"
  }];

  // Tech Team - The Builders
  const techTeam = [{
    name: "Samay Shah",
    role: "Web Designer",
    icon: Code,
    department: "Technology",
    description: "Building scalable web solutions that support our environmental initiatives and connect climate advocates across the globe.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "digital-tech",
    skills: ["Backend Development", "Cloud Architecture", "DevOps", "Security"],
    projects: "12+ Systems Deployed",
    image: "/lovable-uploads/9413211a-4571-4a26-b70b-25d6db812458.png"
  }, {
    name: "Naaham Shah",
    role: "Web Designer",
    icon: Code,
    department: "Technology",
    description: "Developing user-friendly digital platforms that make environmental education and action accessible to communities worldwide.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "digital-tech",
    skills: ["Full Stack Development", "Database Design", "API Integration", "Performance Optimization"],
    projects: "8+ Applications Built",
    image: "/lovable-uploads/78dc6bfc-436f-4e9e-935b-85c13aeb284e.png"
  }, {
    name: "Dhir Jain",
    role: "Web Designer",
    icon: Code,
    department: "Technology",
    description: "Creating innovative web experiences that educate and inspire environmental action through cutting-edge design and development.",
    gradient: "from-secondary/10 to-background",
    iconColor: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
    category: "digital-tech",
    skills: ["Frontend Development", "UI Design", "Responsive Design", "User Experience"],
    projects: "10+ Web Projects",
    image: "/lovable-uploads/72eede36-376c-4854-aa5b-8c6c85b1c530.png"
  }];
  const allMembers = [...leadership, ...departmentHeads, ...techTeam];
  const filteredMembers = activeTab === 'all' ? allMembers : allMembers.filter(member => member.category === activeTab);
  const tabs = [{
    id: 'all',
    label: 'All Team',
    icon: Users,
    count: allMembers.length
  }, {
    id: 'leadership',
    label: 'Leadership',
    icon: Crown,
    count: leadership.length
  }, {
    id: 'creative',
    label: 'Creative',
    icon: Palette,
    count: departmentHeads.filter(m => m.category === 'creative').length
  }, {
    id: 'operations',
    label: 'Operations',
    icon: Target,
    count: departmentHeads.filter(m => m.category === 'operations').length
  }, {
    id: 'digital-tech',
    label: 'Digital & Tech',
    icon: Code,
    count: departmentHeads.filter(m => m.category === 'digital-tech').length + techTeam.length
  }];
  const renderMemberCard = (member: any, index: number, isLeadership = false) => <motion.div key={index} initial={{
    opacity: 0,
    y: 50,
    scale: 0.9
  }} animate={{
    opacity: 1,
    y: 0,
    scale: 1
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)} className={isLeadership ? "col-span-full max-w-2xl mx-auto" : ""}>
      <Card className={`relative p-4 sm:p-6 md:p-8 shadow-2xl border-2 ${member.borderColor} bg-gradient-to-br ${member.gradient} hover:shadow-3xl transition-all duration-500 group overflow-hidden ${member.glowColor} hover:${member.glowColor.replace('shadow-', 'shadow-2xl shadow-')}`}>
        {/* Animated background effects */}
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{
        background: [`linear-gradient(45deg, transparent, ${member.iconColor.replace('text-', 'hsl(var(--')})/10, transparent)`, `linear-gradient(135deg, transparent, ${member.iconColor.replace('text-', 'hsl(var(--')})/20, transparent)`, `linear-gradient(225deg, transparent, ${member.iconColor.replace('text-', 'hsl(var(--')})/10, transparent)`]
      }} transition={{
        duration: 3,
        repeat: Infinity
      }} />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => <motion.div key={i} className={`absolute w-1 h-1 ${member.iconColor.replace('text-', 'bg-')} rounded-full opacity-0 group-hover:opacity-60`} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }} animate={{
          y: [-10, -30, -10],
          opacity: hoveredCard === index ? [0, 0.6, 0] : 0,
          scale: [0, 1, 0]
        }} transition={{
          duration: 2 + Math.random(),
          repeat: Infinity,
          delay: Math.random() * 2
        }} />)}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="relative">
              {member.image ? <motion.div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${member.gradient} border-2 ${member.borderColor} ${member.glowColor} relative`} whileHover={{
              scale: 1.05,
              boxShadow: `0 0 30px ${member.iconColor.replace('text-', 'hsl(var(--')}/40`
            }} transition={{
              duration: 0.3
            }}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.querySelector('.fallback-icon')!.classList.remove('hidden');
              }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className={`absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-gradient-to-br ${member.gradient} border ${member.borderColor} flex items-center justify-center`}>
                    <member.icon className={`w-4 h-4 ${member.iconColor}`} />
                  </div>
                  <div className="fallback-icon hidden w-full h-full flex items-center justify-center">
                    <member.icon className={`w-16 h-16 ${member.iconColor}`} />
                  </div>
                </motion.div> : <motion.div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${member.gradient} border-2 ${member.borderColor} flex items-center justify-center ${member.glowColor}`} whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              boxShadow: `0 0 30px ${member.iconColor.replace('text-', 'hsl(var(--')}/40`
            }} transition={{
              duration: 0.3
            }}>
                  <member.icon className={`w-16 h-16 ${member.iconColor}`} />
                </motion.div>}
            </div>
            
            <div className="flex-1">
              <motion.h3 className="text-2xl font-bold mb-2 text-foreground" animate={hoveredCard === index ? {
              textShadow: `0 0 20px ${member.iconColor.replace('text-', 'hsl(var(--')}/50`
            } : {}}>
                {member.name}
              </motion.h3>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className={`${member.iconColor} border-current bg-current/10 font-semibold`}>
                  {member.role}
                </Badge>
                {member.department && <Badge variant="outline" className="border-muted-foreground/30">
                    {member.department}
                  </Badge>}
              </div>
              
              {isLeadership && <motion.p className="text-lg font-semibold text-muted-foreground mb-2" animate={hoveredCard === index ? {
              scale: 1.02
            } : {
              scale: 1
            }}>
                  {member.title}
                </motion.p>}
            </div>
          </div>

          {/* Description */}
          <motion.p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed" animate={hoveredCard === index ? {
            scale: 1.02
          } : {
            scale: 1
          }}>
            {member.description}
          </motion.p>

          {/* Skills */}
          {member.skills && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.slice(0, 2).map((skill: string, skillIndex: number) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <Badge 
                      variant="outline" 
                      className={`text-xs px-2 py-1 ${member.iconColor} border-current bg-current/5 hover:bg-current/10 transition-colors`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Quote for Leadership or Projects for Others */}
          {isLeadership && member.quote && (
            <motion.blockquote className="text-sm italic text-muted-foreground border-l-4 border-current pl-4 mb-4" animate={hoveredCard === index ? {
              scale: 1.02
            } : {
              scale: 1
            }}>
              "{member.quote}"
            </motion.blockquote>
          )}
          
          {!isLeadership && member.projects && (
            <div className="mb-4">
              <Badge variant="secondary" className="text-xs px-3 py-1">
                <Award className="w-3 h-3 mr-1" />
                {member.projects}
              </Badge>
            </div>
          )}

          {/* Social Links */}
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="p-2 h-9 w-9 hover:bg-primary/10 hover:border-primary/50">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Hover overlay effect */}
        <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
        background: `radial-gradient(circle at center, ${member.iconColor.replace('text-', 'hsl(var(--')}/5, transparent 70%)`
      }} />
      </Card>
    </motion.div>;
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary/20 rounded-full" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }} animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.8, 0],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 4
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
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance" animate={{
            backgroundImage: ["linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))", "linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--accent)))", "linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)))"]
          }} transition={{
            duration: 5,
            repeat: Infinity
          }} style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
              Meet Our Amazing{' '}
              <span className="bg-gradient-earth bg-clip-text text-transparent">
                Team
              </span>
            </motion.h1>
            
            <motion.p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-balance px-2" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }}>
              Passionate climate advocates, innovators, and changemakers working together 
              to create a sustainable future for our planet.
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
          }} className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
                <Users className="w-4 h-4 mr-2" />
                {allMembers.length} Team Members
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                United by Purpose
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                Driven by Impact
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex flex-wrap justify-center gap-3">
            {tabs.map(tab => <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25' : 'bg-background hover:bg-muted border-border hover:border-primary/50'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
                <Badge variant="secondary" className="text-xs px-2 py-0.5 ml-1">
                  {tab.count}
                </Badge>
              </motion.button>)}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4" ref={ref}>
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.5
          }}>
              {/* Leadership Section */}
              {(activeTab === 'all' || activeTab === 'leadership') && <div className="mb-16">
                  <motion.div initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8
              }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Leadership{' '}
                      <span className="bg-gradient-earth bg-clip-text text-transparent">
                        Team
                      </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Visionary leaders guiding our mission with passion, expertise, and unwavering commitment to environmental action.
                    </p>
                  </motion.div>

                  <div className="space-y-12">
                    {/* President - Full width */}
                    <div className="max-w-2xl mx-auto">
                      {renderMemberCard(leadership[0], 0, true)}
                    </div>
                    
                    {/* Vice Presidents - Side by side */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      {leadership.slice(1).map((member, index) => renderMemberCard(member, index + 1, false))}
                    </div>
                  </div>
                </div>}

              {/* Department Teams - Grouped by Role */}
              {activeTab !== 'leadership' && <div className="space-y-16">
                  {/* Project Management Team */}
                  {(activeTab === 'all' || activeTab === 'operations') && <div>
                      <h3 className="text-3xl font-bold mb-8 text-center">
                        Project Management Team
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {filteredMembers.filter(member => member.role === 'Project Head' || member.role === 'Deputy Project Head').map((member, index) => renderMemberCard(member, index))}
                      </div>
                    </div>}

                  {/* Digital & Tech Team */}
                  {(activeTab === 'all' || activeTab === 'digital-tech') && <div>
                      <h3 className="text-3xl font-bold mb-8 text-center">
                        Digital & Tech Team
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {filteredMembers.filter(member => member.category === 'digital-tech').map((member, index) => renderMemberCard(member, index))}
                      </div>
                    </div>}


                  {/* Other Teams */}
                  {(activeTab === 'all' || activeTab === 'creative') && <div>
                      <h3 className="text-3xl font-bold mb-8 text-center">
                        Creative Team
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {filteredMembers.filter(member => member.category === 'creative').map((member, index) => renderMemberCard(member, index))}
                      </div>
                    </div>}
                </div>}
            </motion.div>
          </AnimatePresence>

          {/* Join Team CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-center mt-20">
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default TeamPage;