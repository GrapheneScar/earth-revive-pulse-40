import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trophy, Leaf } from "lucide-react";
import ChallengeCard from "@/components/ChallengeCard";
import CertificateGenerator from "@/components/CertificateGenerator";
import confetti from "canvas-confetti";
import { toast } from "sonner";

const challenges: Array<{
  id: string;
  title: string;
  description: string;
  tips: string;
  impact: string;
  icon: "Recycle" | "Droplets" | "Lightbulb" | "Trash2" | "Bike" | "Cloud" | "Sprout" | "ShoppingBag" | "Share2" | "Users";
}> = [
  {
    id: "plastic-free",
    title: "Reduce Plastic Use",
    description: "Go plastic-free for one week",
    tips: "Use reusable bags, bottles, and containers. Say no to plastic straws and cutlery.",
    impact: "Prevents approximately 50 plastic items from entering landfills",
    icon: "Recycle" as const
  },
  {
    id: "water-conservation",
    title: "Water Conservation",
    description: "Track and reduce water usage by 20%",
    tips: "Fix leaks, take shorter showers, turn off taps while brushing teeth.",
    impact: "Saves approximately 200 liters of water per week",
    icon: "Droplets" as const
  },
  {
    id: "energy-saver",
    title: "Energy Saver",
    description: "Switch to LED bulbs and unplug unused devices",
    tips: "Replace all bulbs with LEDs, unplug chargers and appliances when not in use.",
    impact: "Reduces energy consumption by up to 75% and cuts CO2 emissions",
    icon: "Lightbulb" as const
  },
  {
    id: "zero-waste",
    title: "Zero Food Waste",
    description: "Compost food scraps for a week",
    tips: "Start a compost bin, plan meals to avoid excess, store food properly.",
    impact: "Diverts 2-3 kg of organic waste from landfills weekly",
    icon: "Trash2" as const
  },
  {
    id: "sustainable-transport",
    title: "Sustainable Transport",
    description: "Use public transport or cycle for a week",
    tips: "Walk, bike, or use public transit instead of driving alone.",
    impact: "Reduces carbon footprint by approximately 10 kg CO2 per week",
    icon: "Bike" as const
  },
  {
    id: "digital-cleanup",
    title: "Digital Cleanup",
    description: "Delete unnecessary emails and files",
    tips: "Unsubscribe from unused newsletters, delete old files, clear cloud storage.",
    impact: "Reduces data center energy consumption and your digital carbon footprint",
    icon: "Cloud" as const
  },
  {
    id: "plant-power",
    title: "Plant Power",
    description: "Grow herbs or vegetables at home",
    tips: "Start with easy plants like basil, tomatoes, or lettuce in pots.",
    impact: "Reduces food miles and provides fresh, organic produce",
    icon: "Sprout" as const
  },
  {
    id: "eco-shopping",
    title: "Eco Shopping",
    description: "Buy only local and seasonal products for a week",
    tips: "Visit farmers markets, check product origins, choose seasonal produce.",
    impact: "Supports local economy and reduces transportation emissions",
    icon: "ShoppingBag" as const
  },
  {
    id: "nature-advocate",
    title: "Nature Advocate",
    description: "Share climate awareness on social media",
    tips: "Post facts about climate change, share eco-tips, inspire your network.",
    impact: "Spreads awareness and inspires collective climate action",
    icon: "Share2" as const
  },
  {
    id: "community-impact",
    title: "Community Impact",
    description: "Organize or participate in a local cleanup drive",
    tips: "Join existing drives or organize one in your neighborhood park or beach.",
    impact: "Directly cleans the environment and builds community engagement",
    icon: "Users" as const
  }
];

const YourInitiativePage = () => {
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("completedChallenges");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCompletedChallenges(parsed);
      if (parsed.length === 10) {
        setShowCertificate(true);
      }
    }
  }, []);

  const toggleChallenge = (challengeId: string) => {
    const newCompleted = completedChallenges.includes(challengeId)
      ? completedChallenges.filter(id => id !== challengeId)
      : [...completedChallenges, challengeId];
    
    setCompletedChallenges(newCompleted);
    localStorage.setItem("completedChallenges", JSON.stringify(newCompleted));

    if (!completedChallenges.includes(challengeId)) {
      toast.success(`Challenge completed! ${newCompleted.length}/10`);
    }

    if (newCompleted.length === 10 && !showCertificate) {
      setShowCertificate(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toast.success("🎉 Congratulations! You've completed all challenges!");
    }
  };

  const resetProgress = () => {
    if (confirm("Are you sure you want to reset all progress?")) {
      setCompletedChallenges([]);
      setShowCertificate(false);
      localStorage.removeItem("completedChallenges");
      localStorage.removeItem("certificateName");
      toast.info("Progress reset successfully");
    }
  };

  const progress = (completedChallenges.length / 10) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Your Initiative
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Complete 10 environmental challenges and earn your certificate of achievement. 
            Every action counts towards a sustainable future!
          </p>
        </motion.div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 bg-card p-6 rounded-lg shadow-sm border"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Your Progress</h2>
            </div>
            <span className="text-2xl font-bold text-primary">
              {completedChallenges.length}/10
            </span>
          </div>
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-muted-foreground">
              {completedChallenges.length === 10 
                ? "All challenges completed! 🎉" 
                : `${10 - completedChallenges.length} challenges remaining`}
            </p>
            {completedChallenges.length > 0 && (
              <Button variant="outline" size="sm" onClick={resetProgress}>
                Reset Progress
              </Button>
            )}
          </div>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
        >
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              isCompleted={completedChallenges.includes(challenge.id)}
              onToggle={() => toggleChallenge(challenge.id)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Certificate Section */}
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <CertificateGenerator />
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default YourInitiativePage;
