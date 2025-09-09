import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, RotateCcw, Zap, Leaf, Droplets, Sun } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  icon: typeof Leaf;
  fact: string;
}

const ClimateQuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [streak, setStreak] = useState(0);

  const questions: QuizQuestion[] = [
    {
      question: "What percentage of global CO2 emissions come from transportation?",
      options: ["14%", "24%", "34%", "44%"],
      correct: 0,
      icon: Zap,
      fact: "Transportation accounts for about 14% of global greenhouse gas emissions!"
    },
    {
      question: "How much water can a single tree absorb per day?",
      options: ["10 gallons", "50 gallons", "100 gallons", "200 gallons"],
      correct: 2,
      icon: Droplets,
      fact: "A large tree can absorb up to 100 gallons of water per day!"
    },
    {
      question: "Which renewable energy source is growing fastest globally?",
      options: ["Wind", "Solar", "Hydro", "Geothermal"],
      correct: 1,
      icon: Sun,
      fact: "Solar energy is the fastest-growing renewable energy source worldwide!"
    },
    {
      question: "How many plastic bottles are bought every minute globally?",
      options: ["500,000", "1 million", "2 million", "5 million"],
      correct: 1,
      icon: Leaf,
      fact: "About 1 million plastic bottles are purchased every minute around the world!"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameComplete(false);
    setStreak(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🌟 Climate Champion! Perfect score!";
    if (percentage >= 75) return "🌱 Eco Warrior! Great job!";
    if (percentage >= 50) return "🌿 Green Guardian! Keep learning!";
    return "🌍 Earth Explorer! Practice makes perfect!";
  };

  if (gameComplete) {
    return (
      <Card className="p-4 sm:p-6 lg:p-8 text-center shadow-hero border border-primary/30 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-lg relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 w-full max-w-md mx-auto space-y-4 sm:space-y-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
          >
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-foreground" />
          </motion.div>
          
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-earth bg-clip-text text-transparent leading-tight">
              Quiz Complete!
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg font-medium">{getScoreMessage()}</p>
            <p className="text-sm lg:text-base text-muted-foreground">
              You scored <span className="font-semibold text-primary">{score}</span> out of <span className="font-semibold text-primary">{questions.length}</span> questions correctly!
            </p>
          </div>
          
          <div className="pt-2">
            <Button 
              onClick={resetGame} 
              className="group px-6 py-3 text-sm sm:text-base min-w-[140px]"
            >
              <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Play Again
            </Button>
          </div>
        </motion.div>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const IconComponent = currentQ.icon;

  return (
    <Card className="p-4 sm:p-6 lg:p-8 text-center shadow-hero border border-primary/30 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-lg relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-2 sm:gap-4">
          <div className="text-xs sm:text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            {streak > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 text-primary font-semibold"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{streak} streak</span>
                <span className="xs:hidden">{streak}</span>
              </motion.div>
            )}
            <div className="font-semibold">Score: {score}</div>
          </div>
        </div>

        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center"
          animate={{ 
            boxShadow: [
              '0 0 20px hsl(var(--primary) / 0.3)',
              '0 0 40px hsl(var(--primary) / 0.6)',
              '0 0 20px hsl(var(--primary) / 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </motion.div>

        <motion.h3 
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 bg-gradient-earth bg-clip-text text-transparent px-2"
        >
          {currentQ.question}
        </motion.h3>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {currentQ.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base text-left ${
                selectedAnswer === null
                  ? 'border-primary/30 hover:border-primary bg-background/20 hover:bg-primary/10'
                  : selectedAnswer === index
                    ? index === currentQ.correct
                      ? 'border-green-500 bg-green-500/20 text-green-700'
                      : 'border-red-500 bg-red-500/20 text-red-700'
                    : index === currentQ.correct
                      ? 'border-green-500 bg-green-500/20 text-green-700'
                      : 'border-gray-300 bg-gray-100/20 text-gray-500'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-6"
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 italic px-2">
              {currentQ.fact}
            </p>
            <Button onClick={nextQuestion} className="animate-pulse text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          </motion.div>
        )}

        <div className="w-full bg-secondary/20 rounded-full h-1.5 sm:h-2 mt-4 sm:mt-6">
          <motion.div
            className="bg-gradient-to-r from-primary to-accent h-1.5 sm:h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </Card>
  );
};

export default ClimateQuizGame;