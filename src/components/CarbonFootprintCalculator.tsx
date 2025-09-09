import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Car, 
  Zap, 
  Utensils, 
  Plane, 
  Recycle, 
  Home, 
  CheckCircle, 
  ArrowRight,
  Calculator,
  TreePine,
  Leaf
} from 'lucide-react';

interface Question {
  id: string;
  category: string;
  icon: any;
  question: string;
  options: Array<{ label: string; value: number; icon?: any }>;
}

const CarbonFootprintCalculator = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 'transportation',
      category: 'Transportation',
      icon: Car,
      question: 'How do you typically commute to school?',
      options: [
        { label: 'Walk/Bike', value: 0, icon: TreePine },
        { label: 'Public Transport', value: 2, icon: Car },
        { label: 'Car (Shared)', value: 4, icon: Car },
        { label: 'Car (Alone)', value: 8, icon: Car }
      ]
    },
    {
      id: 'energy',
      category: 'Home Energy',
      icon: Zap,
      question: 'How often do you turn off lights and electronics when not in use?',
      options: [
        { label: 'Always', value: 0, icon: Leaf },
        { label: 'Usually', value: 1, icon: Leaf },
        { label: 'Sometimes', value: 3, icon: Zap },
        { label: 'Rarely', value: 5, icon: Zap }
      ]
    },
    {
      id: 'diet',
      category: 'Diet & Food',
      icon: Utensils,
      question: 'How often do you eat meat?',
      options: [
        { label: 'Never (Vegan)', value: 0, icon: Leaf },
        { label: 'Rarely (Vegetarian)', value: 2, icon: TreePine },
        { label: 'Few times a week', value: 4, icon: Utensils },
        { label: 'Daily', value: 6, icon: Utensils }
      ]
    },
    {
      id: 'travel',
      category: 'Air Travel',
      icon: Plane,
      question: 'How many flights do you take per year?',
      options: [
        { label: 'None', value: 0, icon: TreePine },
        { label: '1-2 domestic', value: 3, icon: Plane },
        { label: '3-5 flights', value: 6, icon: Plane },
        { label: '6+ or international', value: 10, icon: Plane }
      ]
    },
    {
      id: 'waste',
      category: 'Waste & Recycling',
      icon: Recycle,
      question: 'How often do you recycle and reduce waste?',
      options: [
        { label: 'Always separate & minimize', value: 0, icon: Recycle },
        { label: 'Usually recycle', value: 1, icon: Recycle },
        { label: 'Sometimes', value: 3, icon: Home },
        { label: 'Rarely think about it', value: 5, icon: Home }
      ]
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const getScoreCategory = (score: number) => {
    if (score <= 5) return { level: 'Excellent', color: 'text-primary', message: 'You\'re a true climate champion!', emoji: '🌱' };
    if (score <= 12) return { level: 'Good', color: 'text-secondary', message: 'Great job! Small improvements can make you even better.', emoji: '🌿' };
    if (score <= 20) return { level: 'Average', color: 'text-yellow-500', message: 'You\'re on the right track. Let\'s work together!', emoji: '🌍' };
    return { level: 'Needs Improvement', color: 'text-red-500', message: 'Every small change counts. Start today!', emoji: '🌱' };
  };

  const reset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const category = getScoreCategory(score);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="p-8 shadow-card border-none bg-gradient-to-br from-primary/5 to-background text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="text-6xl mb-6"
          >
            {category.emoji}
          </motion.div>
          
          <h3 className="text-3xl font-bold mb-4">Your Carbon Footprint Score</h3>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            <span className={category.color}>{score}</span>
            <span className="text-2xl text-muted-foreground">/30</span>
          </motion.div>
          
          <Badge variant="secondary" className={`mb-6 text-lg px-4 py-2 ${category.color}`}>
            {category.level}
          </Badge>
          
          <p className="text-lg text-muted-foreground mb-8">
            {category.message}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-primary/10 rounded-lg p-4">
              <TreePine className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Trees Needed</p>
              <p className="text-2xl font-bold text-primary">{Math.ceil(score / 2)}</p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-4">
              <Leaf className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-sm font-medium">Impact Level</p>
              <p className="text-2xl font-bold text-secondary">{category.level}</p>
            </div>
          </div>
          
          <Button onClick={reset} className="bg-primary hover:bg-primary/90">
            Take Quiz Again
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="text-sm">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6 sm:p-8 shadow-card border-none bg-gradient-to-br from-background to-muted/5">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-earth flex items-center justify-center">
                <currentQuestion.icon className="w-8 h-8 text-white" />
              </div>
              
              <Badge variant="outline" className="mb-4">
                {currentQuestion.category}
              </Badge>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-balance">
                {currentQuestion.question}
              </h3>
            </div>

            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.value)}
                  className="p-3 sm:p-4 text-left rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {option.icon && (
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <option.icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="text-sm sm:text-base font-medium">{option.label}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const CarbonFootprintSection = () => {
  return (
    <section id="carbon-calculator" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-6">
            Interactive Assessment
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your{' '}
            <span className="bg-gradient-earth bg-clip-text text-transparent">
              Carbon Footprint
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take our interactive quiz to discover your environmental impact and learn how you can make a difference in the fight against climate change.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span>5 Questions</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Instant Results</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <TreePine className="w-4 h-4" />
              <span>Action Tips</span>
            </div>
          </div>
        </motion.div>

        <CarbonFootprintCalculator />
      </div>
    </section>
  );
};

export default CarbonFootprintSection;