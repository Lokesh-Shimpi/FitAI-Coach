import { Dumbbell, Apple, Brain, Sparkles } from "lucide-react";

const LoadingState = () => {
  const steps = [
    { icon: Brain, label: "Analyzing your profile..." },
    { icon: Dumbbell, label: "Designing workout plan..." },
    { icon: Apple, label: "Creating nutrition plan..." },
    { icon: Sparkles, label: "Finalizing recommendations..." },
  ];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in">
      {/* Main Spinner */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full gradient-primary animate-pulse-glow flex items-center justify-center">
          <Dumbbell className="w-10 h-10 text-primary-foreground animate-float" />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '3s' }} />
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
        Creating Your Plan
      </h2>
      <p className="text-muted-foreground mb-8">This may take a moment...</p>

      {/* Progress Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <step.icon className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-xs text-center text-muted-foreground">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;
