export interface UserInput {
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  fitnessGoal: string;
  fitnessLevel: string;
  workoutLocation: string;
  dietPreference: string;
  medicalConditions: string;
  stressLevel: string;
  dailyTime: number;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export interface DayWorkout {
  day: string;
  warmup: {
    duration: string;
    activities: string[];
  };
  exercises: Exercise[];
  cooldown: string[];
  intensity: string;
}

export interface MealPlan {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
  hydration: string;
}

export interface FitnessPlan {
  workoutPlan: DayWorkout[];
  dietPlan: MealPlan;
  fitnessTips: string[];
  motivation: {
    quote: string;
    habitAdvice: string;
  };
  imagePrompts: {
    exercises: string[];
    meals: string[];
  };
  disclaimer: string;
}
