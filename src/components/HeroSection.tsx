import { Dumbbell, Zap, Apple, Heart } from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: Dumbbell, label: "Custom Workouts" },
    { icon: Apple, label: "Nutrition Plans" },
    { icon: Zap, label: "AI-Powered" },
    { icon: Heart, label: "Health Focused" },
  ];

  return (
    <div className="text-center mb-12 animate-fade-in">
      {/* Logo/Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <Zap className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">AI-Powered Fitness Coach</span>
      </div>
      
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
        Transform Your
        <span className="block text-gradient">Fitness Journey</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Get a personalized workout and nutrition plan tailored to your goals, 
        fitness level, and lifestyle. Powered by advanced AI technology.
      </p>
      
      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <feature.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
