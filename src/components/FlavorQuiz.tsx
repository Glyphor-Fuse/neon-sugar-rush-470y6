import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, SparklesCore, Star } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { label: string; value: string; color: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Pick your vibe",
    options: [
      { label: "Sour Shock", value: "sour", color: "bg-primary" },
      { label: "Sweet Dream", value: "sweet", color: "bg-secondary" },
      { label: "Spicy Heat", value: "spicy", color: "bg-destructive" },
    ]
  },
  {
    id: 2,
    text: "Texture preference?",
    options: [
      { label: "Crunchy", value: "crunchy", color: "bg-chart-1" },
      { label: "Chewy", value: "chewy", color: "bg-chart-2" },
      { label: "Melty", value: "melty", color: "bg-chart-3" },
    ]
  },
  {
    id: 3,
    text: "When do you snack?",
    options: [
      { label: "Movie Night", value: "movie", color: "bg-chart-4" },
      { label: "Midnight Cravings", value: "midnight", color: "bg-chart-5" },
      { label: "Party Time", value: "party", color: "bg-accent" },
    ]
  }
];

const FlavorQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionClick = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsComplete(false);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Interactive</Badge>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Find Your <span className="text-primary">Sugar Match</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Answer 3 questions to discover your candy soulmate. Warning: Results may cause intense cravings.
          </p>
        </div>

        <div className="max-w-2xl mx-auto h-[400px] relative perspective-1000">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={questions[currentStep].id}
                initial={{ opacity: 0, x: 100, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <Card className="bg-card border-border/50 p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                  <span className="text-sm font-medium text-muted-foreground mb-2 block uppercase tracking-widest">
                    Step {currentStep + 1} of 3
                  </span>
                  <h3 className="text-3xl font-bold mb-8 text-foreground">{questions[currentStep].text}</h3>
                  
                  <div className="grid gap-4">
                    {questions[currentStep].options.map((option) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOptionClick(option.value)}
                        className="group flex items-center justify-between p-4 rounded-xl border border-border bg-background/50 hover:bg-accent/10 transition-colors text-left"
                      >
                        <span className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                          {option.label}
                        </span>
                        <div className={`w-3 h-3 rounded-full ${option.color} opacity-50 group-hover:opacity-100 shadow-[0_0_10px_currentColor] transition-all`} />
                      </motion.button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-full h-full"
              >
                <Card className="bg-card border-primary/50 p-8 md:p-12 shadow-[0_0_50px_-10px_var(--color-primary)] text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary animate-pulse">
                    <Star className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display mb-2">The Neon Night Owl</h3>
                  <p className="text-muted-foreground mb-8">
                    Based on your choices, you need something bold, tangy, and perfect for late nights.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="w-full">
                      Shop Bundle
                    </Button>
                    <Button variant="outline" size="icon" onClick={resetQuiz}>
                      <RefreshCcw className="w-5 h-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FlavorQuiz;
