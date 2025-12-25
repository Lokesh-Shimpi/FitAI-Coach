import { DayWorkout } from "@/types/fitness";
import { Flame, Timer, Dumbbell, Wind } from "lucide-react";

interface WorkoutPlanCardProps {
  workout: DayWorkout;
  index: number;
}

const WorkoutPlanCard = ({ workout, index }: WorkoutPlanCardProps) => {
  const intensityColors = {
    Low: "text-green-400 bg-green-400/10",
    Moderate: "text-yellow-400 bg-yellow-400/10",
    High: "text-red-400 bg-red-400/10",
  };

  const intensityColor = intensityColors[workout.intensity as keyof typeof intensityColors] || intensityColors.Moderate;

  return (
    <div 
      className="glass-card rounded-2xl p-6 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display font-bold text-foreground">{workout.day}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${intensityColor}`}>
          {workout.intensity}
        </span>
      </div>

      {/* Warm-up */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-semibold text-muted-foreground">Warm-up ({workout.warmup.duration})</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {workout.warmup.activities.map((activity, i) => (
            <span key={i} className="px-2 py-1 bg-secondary rounded-md text-xs text-foreground">
              {activity}
            </span>
          ))}
        </div>
      </div>

      {/* Exercises */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Dumbbell className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-muted-foreground">Main Workout</span>
        </div>
        <div className="space-y-2">
          {workout.exercises.map((exercise, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span className="text-sm font-medium text-foreground">{exercise.name}</span>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{exercise.sets} sets</span>
                <span>×</span>
                <span>{exercise.reps}</span>
                <span className="flex items-center gap-1">
                  <Timer className="w-3 h-3" />
                  {exercise.rest}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cool-down */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Wind className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold text-muted-foreground">Cool-down</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {workout.cooldown.map((activity, i) => (
            <span key={i} className="px-2 py-1 bg-secondary rounded-md text-xs text-foreground">
              {activity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
