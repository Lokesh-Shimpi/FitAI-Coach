import { FitnessPlan } from "@/types/fitness";
import WorkoutPlanCard from "./WorkoutPlanCard";
import DietPlanCard from "./DietPlanCard";
import TipsCard from "./TipsCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Calendar, Utensils, Lightbulb } from "lucide-react";

interface FitnessPlanDisplayProps {
  plan: FitnessPlan;
  userName: string;
  onReset: () => void;
}

const FitnessPlanDisplay = ({ plan, userName, onReset }: FitnessPlanDisplayProps) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Your Personalized Plan
          </h2>
          <p className="text-muted-foreground mt-1">
            Customized for <span className="text-primary font-semibold">{userName}</span>
          </p>
        </div>
        <Button variant="outline" onClick={onReset} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Create New Plan
        </Button>
      </div>

      {/* Workout Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Calendar className="w-4 h-4 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground">7-Day Workout Plan</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {plan.workoutPlan.map((workout, index) => (
            <WorkoutPlanCard key={index} workout={workout} index={index} />
          ))}
        </div>
      </section>

      {/* Diet Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Utensils className="w-4 h-4 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground">Nutrition Plan</h3>
        </div>
        <DietPlanCard dietPlan={plan.dietPlan} />
      </section>

      {/* Tips & Motivation Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground">Tips & Motivation</h3>
        </div>
        <TipsCard tips={plan.fitnessTips} motivation={plan.motivation} />
      </section>

      {/* Disclaimer */}
      <div className="glass-card rounded-2xl p-4 animate-fade-in border-l-4 border-yellow-500/50">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">{plan.disclaimer}</p>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlanDisplay;
