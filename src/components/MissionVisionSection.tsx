import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Calendar, TrendingUp } from 'lucide-react';

const MissionVisionSection = () => {
  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      color: "primary",
      content: "To engage students in meaningful environmental initiatives that reduce impact, raise awareness, and cultivate responsibility toward our planet through collaborative action.",
      gradient: "from-primary/10 to-background"
    },
    {
      icon: Eye,
      title: "Our Vision", 
      color: "secondary",
      content: "A generation of young changemakers committed to building a sustainable future, creating a greener and more resilient tomorrow for all.",
      gradient: "from-secondary/10 to-background"
    },
    {
      icon: Calendar,
      title: "What We Do",
      color: "accent",
      content: "We organize collaborative projects, awareness campaigns, educational workshops, and sustainability initiatives that empower students to become environmental leaders.",
      gradient: "from-accent/10 to-background"
    },
    {
      icon: TrendingUp,
      title: "Upcoming Plans",
      color: "primary",
      content: "Launch global student exchange programs, develop carbon tracking app, establish green innovation labs, and create international climate action network.",
      gradient: "from-primary/10 to-background"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 border-primary text-primary">
            Our Framework
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Tomorrow's{' '}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              Sustainability Leaders
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we're shaping the future through education, innovation, and collective action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`p-8 h-full shadow-card border-none bg-gradient-to-br ${section.gradient} hover:shadow-soft transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-earth flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-${section.color} mb-2`}>
                      {section.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {section.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;