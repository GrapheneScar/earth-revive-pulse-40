import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Target, Users, Lightbulb } from 'lucide-react';

const ProjectSummary = () => {
  const highlights = [
    { icon: Globe, label: "Global Impact", color: "text-primary" },
    { icon: Target, label: "Sustainable Goals", color: "text-secondary" },
    { icon: Users, label: "Community Driven", color: "text-accent" },
    { icon: Lightbulb, label: "Innovation Focus", color: "text-primary" }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            JBCN Climate Action Project
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Empowering the Next Generation of{' '}
            <span className="bg-gradient-earth bg-clip-text text-transparent">
              Climate Champions
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-6 sm:p-8 shadow-card border-none bg-gradient-to-br from-primary/5 to-background">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The <strong className="text-primary">JBCN Climate Action Project (CAP)</strong> envisions 
                a generation of young changemakers committed to building a sustainable future. Our mission 
                is to engage students in meaningful initiatives that reduce environmental impact, raise 
                awareness, and cultivate responsibility toward our planet.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through collaborative projects, campaigns, and promotion, CAP empowers not only our 
                school community, but learners all around the globe to take action today for a 
                greener and more resilient tomorrow.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6 text-center border-none bg-gradient-to-br from-background to-muted/5 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-earth flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.4)]`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold ${item.color} mb-2`}>
                    {item.label}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;