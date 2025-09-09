import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Star, Users } from 'lucide-react';
const LeadershipCards = () => {
  const leaders = [{
    name: "Prishti Sangani",
    role: "President",
    icon: Crown,
    title: "Leading the Vision",
    message: "Greetings, I'm Prishti Sangani, and I'm honoured to serve as the President of the Climate Action Project this year. For me, CAP is not just about raising awareness, but about building real initiatives that inspire people to take small, consistent steps toward sustainability. Outside of CAP, I've grown through athletics, which has taught me discipline and resilience; through my love for cars and Formula 1, which keeps me fascinated by innovation and technology; and through MUN, where I've debated some of the very issues we now seek to solve. All of these experiences fuel my leadership here, reminding me that progress comes from teamwork, determination, and creativity. As President, my goal is to make CAP a platform where students don't just talk about climate change, but actively shape solutions - together.",
    gradient: "from-primary/15 to-background",
    iconColor: "text-primary",
    badgeColor: "default",
    isPresident: true
  }, {
    name: "Aastha Borkar",
    role: "Vice President",
    icon: Star,
    title: "Driving Implementation",
    message: "As Vice President of the Climate Action Project, I see leadership not just as a title but as a responsibility to spark change. Climate change isn't a problem we can solve with quick fixes—it demands a shift in mindset. Too often, we dismiss small actions as insignificant, without realising their global impact. Through hands-on initiatives and education, we aim to empower others to see that every choice matters—because together, we have the power to rewrite the future."
  }, {
    name: "Tiya Chopra",
    role: "Vice President",
    icon: Users,
    title: "Building Communities",
    message: "Greetings Everyone, I am Tiya Chopra, and I am your Vice President of CAP. In this role, my aim is to ensure that our initiatives do more than spread awareness, they inspire, engage and impact. Beyond academics, I am also an international athlete, dancer, an artist and extremely passionate about biochemistry, which is why I am so drawn to the climate. These experiences have shaped my discipline, creativity, and commitment, qualities I bring into every project I undertake. For me, climate action is both a responsibility and a heartfelt commitment, it's a way of giving back to the world that gives us so much. Together, I believe the smallest steps we take can create a truly lasting impact."
  }];
  const teamMembers = [{
    name: "Chesha Karia",
    role: "Design Head"
  }, {
    name: "Jash Shah",
    role: "Photography Head"
  }, {
    name: "Yuvna Lamba",
    role: "Project Head"
  }, {
    name: "Vaishnavi Nishanth",
    role: "Deputy Project Head"
  }, {
    name: "Navyapriya Baid",
    role: "Social Media Co-Head"
  }, {
    name: "Anushka Shinde",
    role: "Social Media Co-Head"
  }, {
    name: "Samay Shah",
    role: "Web Designer"
  }, {
    name: "Naaham Shah",
    role: "Web Designer"
  }, {
    name: "Dhir Jain",
    role: "Web Designer",
    image: "/lovable-uploads/418e7bad-7c85-4bb5-9a46-102d463caa15.png"
  }];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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
          <Badge variant="secondary" className="mb-6">
            Leadership Team
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{' '}
            <span className="bg-gradient-earth bg-clip-text text-transparent">
              Climate Leaders
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate students driving environmental change through innovation, collaboration, and unwavering commitment to sustainability.
          </p>
        </motion.div>

        {/* President Card Only */}
        <div className="mb-12">
          {leaders.filter(leader => leader.isPresident).map((leader, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="max-w-2xl mx-auto">
              <Card className={`p-8 shadow-card border-none bg-gradient-to-br ${leader.gradient} hover:shadow-soft hover-lift transition-all duration-300 h-full interactive-card border-2 border-primary/30`}>
                <div className="space-y-6">
                  {/* Image Placeholder */}
                  <div className="relative">
                    <motion.div className="w-full aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl flex items-center justify-center border-2 border-border/20 relative overflow-hidden" whileHover={{
                  scale: 1.02
                }} transition={{
                  duration: 0.3
                }}>
                      <motion.div className="absolute inset-0 bg-gradient-earth opacity-10" animate={{
                    background: ["linear-gradient(45deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))", "linear-gradient(45deg, hsl(var(--secondary) / 0.1), hsl(var(--accent) / 0.1))", "linear-gradient(45deg, hsl(var(--accent) / 0.1), hsl(var(--primary) / 0.1))"]
                  }} transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />
                      
                      <div className="text-center z-10">
                        <img key={`president-image-${Date.now()}`} src="/lovable-uploads/daf17b1f-d28e-49e2-a25c-f5e4c585cac4.png" alt="Prishti Sangani" className="w-full h-full object-cover rounded-2xl absolute inset-0" onError={e => {
                      const img = e.currentTarget as HTMLImageElement;
                      console.log('Image load error:', img.src);
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = '1';
                        img.src = '/lovable-uploads/19fa923c-48e9-4b92-8163-8b407c49a326.png';
                        console.log('Falling back to placeholder image');
                      }
                    }} />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                        <Crown className="w-5 h-5" />
                        PRESIDENT
                        <Crown className="w-5 h-5" />
                      </p>
                    </div>
                    
                    <blockquote className="text-base text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                      "{leader.message}"
                    </blockquote>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </div>

        {/* Vice President Cards - Side by Side */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {leaders.filter(leader => !leader.isPresident).map((leader, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }}>
                <Card className="p-8 shadow-card border-none bg-gradient-to-br from-secondary/10 to-background hover:shadow-soft hover-lift transition-all duration-300 h-full interactive-card">
                  <div className="space-y-6">
                    {/* Image Placeholder */}
                    <div className="relative">
                      <motion.div className="w-full aspect-square bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl flex items-center justify-center border-2 border-border/20 relative overflow-hidden" whileHover={{
                    scale: 1.02
                  }} transition={{
                    duration: 0.3
                  }}>
                        <img src={leader.name === "Aastha Borkar" ? "/lovable-uploads/aastha-borkar.png" : leader.name === "Tiya Chopra" ? "/lovable-uploads/cdc7695c-5d46-47be-a1cb-71424e022ef5.png" : undefined} alt={leader.name} className="w-full h-full object-cover rounded-2xl absolute inset-0" style={{
                      display: leader.name === "Aastha Borkar" || leader.name === "Tiya Chopra" ? "block" : "none"
                    }} />
                        {leader.name !== "Aastha Borkar" && leader.name !== "Tiya Chopra" && <div className="text-center z-10">
                            <motion.div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-earth flex items-center justify-center shadow-glow">
                              <leader.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <p className="text-sm text-muted-foreground">
                              Photo Coming Soon
                            </p>
                          </div>}
                      </motion.div>
                      
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground mb-3">
                          Vice- President
                        </p>
                      </div>
                      
                      <blockquote className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                        "{leader.message}"
                      </blockquote>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </div>
        </div>

        {/* Team Members Grid */}
        
      </div>
    </section>;
};
export default LeadershipCards;