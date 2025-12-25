import { Lightbulb, Sparkles, Quote } from "lucide-react";

interface TipsCardProps {
  tips: string[];
  motivation: {
    quote: string;
    habitAdvice: string;
  };
}

const TipsCard = ({ tips, motivation }: TipsCardProps) => {
  return (
    <div className="space-y-6">
      {/* Fitness Tips */}
      <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">Pro Tips</h3>
        </div>
        
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
              <span className="text-primary font-bold">{index + 1}</span>
              <span className="text-sm text-muted-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Motivation */}
      <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">Daily Motivation</h3>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
            <div className="flex items-start gap-2">
              <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground font-medium italic">{motivation.quote}</p>
            </div>
          </div>
          
          <div className="p-4 bg-secondary/50 rounded-xl">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Today's Habit: </span>
              {motivation.habitAdvice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
