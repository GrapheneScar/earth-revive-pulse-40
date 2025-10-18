import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, RotateCcw, Calendar, Lightbulb } from 'lucide-react';

const ecochallenges = [
  {
    id: 1,
    title: "Use Reusable Water Bottle",
    description: "Replace single-use plastic bottles with a reusable one for all your hydration needs today.",
    impact: "Saves 1 plastic bottle from landfill",
    difficulty: "Easy",
    icon: "💧",
    tips: "Keep it filled and visible as a reminder!"
  },
  {
    id: 2,
    title: "Plant a Seed",
    description: "Plant a seed or seedling in a pot or your garden to contribute to greener spaces.",
    impact: "Adds oxygen production & carbon absorption",
    difficulty: "Easy",
    icon: "🌱",
    tips: "Even herbs on your windowsill count!"
  },
  {
    id: 3,
    title: "5-Minute Power Down",
    description: "Unplug all non-essential electronics for 5 minutes during peak hours.",
    impact: "Reduces energy consumption",
    difficulty: "Easy",
    icon: "⚡",
    tips: "Use this time for a mindful break!"
  },
  {
    id: 4,
    title: "Zero Food Waste Meal",
    description: "Plan and prepare a meal using only ingredients you already have at home.",
    impact: "Prevents food waste & reduces methane emissions",
    difficulty: "Medium",
    icon: "🍽️",
    tips: "Get creative with leftovers!"
  },
  {
    id: 5,
    title: "Walk or Bike Trip",
    description: "Choose walking or biking instead of driving for one trip today.",
    impact: "Reduces carbon emissions",
    difficulty: "Medium",
    icon: "🚶",
    tips: "Fresh air and exercise bonus!"
  },
  {
    id: 6,
    title: "Digital Detox Hour",
    description: "Spend one hour without any digital devices - read, meditate, or enjoy nature.",
    impact: "Reduces device energy consumption",
    difficulty: "Easy",
    icon: "📱",
    tips: "Try it during sunset for extra peace!"
  },
  {
    id: 7,
    title: "DIY Natural Cleaner",
    description: "Make a cleaning solution using vinegar, baking soda, and lemon.",
    impact: "Avoids harmful chemicals entering waterways",
    difficulty: "Easy",
    icon: "🧽",
    tips: "Works great on most surfaces!"
  }
];

const DailyEcoChallenge = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(ecochallenges[0]);

  useEffect(() => {
    // Get today's challenge based on day of year
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    const challengeIndex = dayOfYear % ecochallenges.length;
    setCurrentChallenge(ecochallenges[challengeIndex]);

    // Check if challenge was completed today
    const completedToday = localStorage.getItem(`eco-challenge-${today.toDateString()}`);
    setIsCompleted(completedToday === 'true');
  }, []);

  const handleComplete = () => {
    const today = new Date().toDateString();
    localStorage.setItem(`eco-challenge-${today}`, 'true');
    setIsCompleted(true);
  };

  const handleReset = () => {
    const today = new Date().toDateString();
    localStorage.removeItem(`eco-challenge-${today}`);
    setIsCompleted(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'Hard': return 'text-red-500';
      default: return 'text-green-500';
    }
  };

  return (
    <motion.div
      id="daily-challenge"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm border border-primary/20 shadow-hero">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 rounded-full bg-primary/20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Calendar className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-nature bg-clip-text text-transparent">
                Today's Eco Challenge
              </h3>
            </div>
            
            <motion.div
              className="text-4xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentChallenge.icon}
            </motion.div>
          </div>

          {/* Challenge Content */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                {currentChallenge.title}
              </h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {currentChallenge.description}
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 ${getDifficultyColor(currentChallenge.difficulty)}`}>
                  {currentChallenge.difficulty}
                </span>
                <span className="text-sm text-muted-foreground">
                  🌍 {currentChallenge.impact}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4">
              {!isCompleted ? (
                <Button
                  onClick={handleComplete}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mark as Completed
                </Button>
              ) : (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3 text-green-500">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold">Challenge Completed! 🎉</span>
                  </div>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </motion.div>
              )}

              <Button
                onClick={() => setShowTip(!showTip)}
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                {showTip ? 'Hide Tip' : 'Show Tip'}
              </Button>
            </div>
          </div>

          {/* Tip Section */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showTip ? 'auto' : 0, 
              opacity: showTip ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-sm">Pro Tip:</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {currentChallenge.tips}
              </p>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm text-muted-foreground">
                New challenge tomorrow at midnight
              </span>
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DailyEcoChallenge;