import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, Droplets, Lightbulb, Trash2, Bike, 
  Cloud, Sprout, ShoppingBag, Share2, Users 
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const iconMap = {
  Recycle,
  Droplets,
  Lightbulb,
  Trash2,
  Bike,
  Cloud,
  Sprout,
  ShoppingBag,
  Share2,
  Users
};

interface Challenge {
  id: string;
  title: string;
  description: string;
  tips: string;
  impact: string;
  icon: keyof typeof iconMap;
}

interface ChallengeCardProps {
  challenge: Challenge;
  isCompleted: boolean;
  onToggle: () => void;
  index: number;
}

const ChallengeCard = ({ challenge, isCompleted, onToggle, index }: ChallengeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = iconMap[challenge.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card 
        className={`h-full transition-all duration-300 ${
          isCompleted 
            ? "bg-primary/5 border-primary/30" 
            : "hover:shadow-lg"
        }`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <div className={`p-2 rounded-lg ${isCompleted ? "bg-primary/20" : "bg-secondary"}`}>
                <Icon className={`w-5 h-5 ${isCompleted ? "text-primary" : "text-foreground"}`} />
              </div>
              <CardTitle className="text-lg leading-tight">{challenge.title}</CardTitle>
            </div>
            <Checkbox
              checked={isCompleted}
              onCheckedChange={onToggle}
              className="mt-1"
            />
          </div>
          <CardDescription className="mt-2">{challenge.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="pb-4">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-primary hover:underline">
              <span>View Details</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 space-y-3">
              <div>
                <Badge variant="secondary" className="mb-2">Tips</Badge>
                <p className="text-sm text-muted-foreground">{challenge.tips}</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">Impact</Badge>
                <p className="text-sm text-muted-foreground">{challenge.impact}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChallengeCard;
