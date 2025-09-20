import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Users, Globe, MapPin, Calendar, Target, Sparkles, TreePine } from "lucide-react";

interface PartnershipCardProps {
  title: string;
  description: string;
  details: string;
  achievements?: string[];
  links?: { title: string; url: string }[];
  stats?: { label: string; value: string }[];
  image?: string;
  logo?: string;
  gradient: string;
  icon: React.ReactNode;
  badges?: string[];
  delay?: number;
}

const PartnershipCard = ({ 
  title, 
  description, 
  details, 
  achievements = [], 
  links = [], 
  stats = [], 
  image, 
  logo, 
  gradient, 
  icon, 
  badges = [],
  delay = 0 
}: PartnershipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden hover-lift transition-smooth h-full border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Header with gradient */}
        <div className={`relative h-32 bg-gradient-to-r ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-white/90"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          </div>
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {title}
              </CardTitle>
              <p className="text-muted-foreground mt-1 text-sm">{description}</p>
            </div>
            {logo && (
              <div className="flex-shrink-0">
                <img src={logo} alt={`${title} logo`} className="w-12 h-12 rounded-lg shadow-sm" />
              </div>
            )}
          </div>
          
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">{details}</p>

          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <Sparkles className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {image && (
            <div className="rounded-lg overflow-hidden shadow-card">
              <img src={image} alt={title} className="w-full h-32 object-cover" />
            </div>
          )}

          {links.length > 0 && (
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-between group/btn"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span>{link.title}</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PartnershipCard;