import { MealPlan } from "@/types/fitness";
import { Coffee, Sun, Moon, Cookie, Droplets } from "lucide-react";

interface DietPlanCardProps {
  dietPlan: MealPlan;
}

const DietPlanCard = ({ dietPlan }: DietPlanCardProps) => {
  const meals = [
    { title: "Breakfast", icon: Coffee, items: dietPlan.breakfast, color: "text-orange-400" },
    { title: "Lunch", icon: Sun, items: dietPlan.lunch, color: "text-yellow-400" },
    { title: "Dinner", icon: Moon, items: dietPlan.dinner, color: "text-indigo-400" },
    { title: "Snacks", icon: Cookie, items: dietPlan.snacks, color: "text-pink-400" },
  ];

  return (
    <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-2xl font-display font-bold text-foreground mb-6">Daily Nutrition Plan</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {meals.map((meal, index) => (
          <div key={index} className="p-4 bg-secondary/50 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <meal.icon className={`w-5 h-5 ${meal.color}`} />
              <span className="font-semibold text-foreground">{meal.title}</span>
            </div>
            <ul className="space-y-1">
              {meal.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hydration */}
      <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="w-5 h-5 text-blue-400" />
          <span className="font-semibold text-foreground">Hydration</span>
        </div>
        <p className="text-sm text-muted-foreground">{dietPlan.hydration}</p>
      </div>
    </div>
  );
};

export default DietPlanCard;
