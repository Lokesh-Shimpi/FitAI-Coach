import { useState } from "react";
import { toast } from "sonner";
import HeroSection from "@/components/HeroSection";
import FitnessForm from "@/components/FitnessForm";
import FitnessPlanDisplay from "@/components/FitnessPlanDisplay";
import LoadingState from "@/components/LoadingState";
import { UserInput, FitnessPlan } from "@/types/fitness";

// Mock AI response generator (to be replaced with actual AI integration)
const generateMockPlan = (input: UserInput): FitnessPlan => {
  const goalExercises = {
    fat_loss: [
      { name: "Burpees", sets: 3, reps: "12", rest: "45s" },
      { name: "Mountain Climbers", sets: 3, reps: "30s", rest: "30s" },
      { name: "Jump Squats", sets: 3, reps: "15", rest: "45s" },
      { name: "High Knees", sets: 3, reps: "45s", rest: "30s" },
    ],
    muscle_gain: [
      { name: "Push-ups", sets: 4, reps: "12-15", rest: "60s" },
      { name: "Pull-ups", sets: 4, reps: "8-10", rest: "90s" },
      { name: "Squats", sets: 4, reps: "12", rest: "90s" },
      { name: "Lunges", sets: 3, reps: "10 each", rest: "60s" },
    ],
    strength: [
      { name: "Deadlifts", sets: 5, reps: "5", rest: "120s" },
      { name: "Bench Press", sets: 5, reps: "5", rest: "120s" },
      { name: "Barbell Rows", sets: 4, reps: "6-8", rest: "90s" },
      { name: "Overhead Press", sets: 4, reps: "6-8", rest: "90s" },
    ],
    endurance: [
      { name: "Running", sets: 1, reps: "30 min", rest: "N/A" },
      { name: "Cycling", sets: 1, reps: "20 min", rest: "N/A" },
      { name: "Jump Rope", sets: 3, reps: "3 min", rest: "60s" },
      { name: "Box Jumps", sets: 3, reps: "15", rest: "45s" },
    ],
    general_fitness: [
      { name: "Squats", sets: 3, reps: "15", rest: "60s" },
      { name: "Push-ups", sets: 3, reps: "12", rest: "45s" },
      { name: "Plank", sets: 3, reps: "45s", rest: "30s" },
      { name: "Walking Lunges", sets: 3, reps: "10 each", rest: "45s" },
    ],
  };

  const exercises = goalExercises[input.fitnessGoal as keyof typeof goalExercises] || goalExercises.general_fitness;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const restDays = [2, 5]; // Wednesday and Saturday as rest days

  const workoutPlan = days.map((day, index) => ({
    day,
    warmup: {
      duration: "5-10 min",
      activities: restDays.includes(index) 
        ? ["Light stretching", "Deep breathing"]
        : ["Light jogging", "Dynamic stretches", "Arm circles"],
    },
    exercises: restDays.includes(index) 
      ? [{ name: "Active Recovery / Rest", sets: 0, reps: "N/A", rest: "N/A" }]
      : exercises,
    cooldown: ["Static stretching", "Deep breathing", "Foam rolling"],
    intensity: restDays.includes(index) ? "Low" : input.fitnessLevel === "beginner" ? "Moderate" : "High",
  }));

  const dietPlans = {
    vegetarian: {
      breakfast: ["Oatmeal with banana and almonds", "Greek yogurt with berries", "Whole grain toast with avocado"],
      lunch: ["Quinoa salad with chickpeas", "Vegetable stir-fry with tofu", "Lentil soup with whole grain bread"],
      dinner: ["Grilled paneer with vegetables", "Black bean tacos", "Mushroom risotto"],
      snacks: ["Mixed nuts", "Hummus with carrots", "Fruit smoothie"],
      hydration: "Drink at least 8-10 glasses of water daily. Include green tea for antioxidants.",
    },
    vegan: {
      breakfast: ["Smoothie bowl with fruits and seeds", "Avocado toast on whole grain", "Chia pudding with berries"],
      lunch: ["Buddha bowl with quinoa", "Falafel wrap with tahini", "Vegetable curry with brown rice"],
      dinner: ["Stuffed bell peppers with beans", "Vegan pasta primavera", "Tofu stir-fry with vegetables"],
      snacks: ["Trail mix", "Apple with almond butter", "Edamame"],
      hydration: "Aim for 3 liters of water daily. Coconut water is great post-workout.",
    },
    keto: {
      breakfast: ["Eggs with avocado and bacon", "Keto smoothie with MCT oil", "Cheese omelette with spinach"],
      lunch: ["Grilled chicken salad with olive oil", "Cauliflower rice bowl", "Zucchini noodles with meat sauce"],
      dinner: ["Salmon with asparagus", "Steak with butter and vegetables", "Chicken thighs with broccoli"],
      snacks: ["Cheese cubes", "Beef jerky", "Celery with cream cheese"],
      hydration: "Stay hydrated with 3+ liters. Add electrolytes to prevent keto flu.",
    },
    "non-vegetarian": {
      breakfast: ["Eggs with whole grain toast", "Protein pancakes", "Greek yogurt with granola"],
      lunch: ["Grilled chicken breast with rice", "Tuna salad wrap", "Turkey sandwich on whole grain"],
      dinner: ["Salmon with quinoa and vegetables", "Lean beef stir-fry", "Chicken curry with brown rice"],
      snacks: ["Hard-boiled eggs", "Cottage cheese", "Protein shake"],
      hydration: "Drink 2.5-3 liters of water. Include bone broth for added protein.",
    },
    mixed: {
      breakfast: ["Scrambled eggs with vegetables", "Protein smoothie", "Overnight oats with nuts"],
      lunch: ["Grilled fish with salad", "Chicken and vegetable wrap", "Lentil soup with bread"],
      dinner: ["Lean meat with roasted vegetables", "Stir-fried tofu with rice", "Pasta with lean meat sauce"],
      snacks: ["Mixed nuts", "Fruit with cheese", "Protein bar"],
      hydration: "Maintain 2.5-3 liters daily. Add lemon for vitamin C boost.",
    },
  };

  const selectedDiet = dietPlans[input.dietPreference as keyof typeof dietPlans] || dietPlans.mixed;

  return {
    workoutPlan,
    dietPlan: selectedDiet,
    fitnessTips: [
      `As a ${input.fitnessLevel}, focus on proper form before increasing intensity`,
      `Train in your ${input.workoutLocation} environment with equipment available to you`,
      "Get 7-9 hours of quality sleep for optimal recovery",
      "Track your progress weekly to stay motivated",
      "Listen to your body and rest when needed",
    ],
    motivation: {
      quote: "The only bad workout is the one that didn't happen. Every step forward is progress!",
      habitAdvice: "Start with just 10 minutes today. Consistency beats intensity.",
    },
    imagePrompts: {
      exercises: exercises.map(e => 
        `A realistic, high-quality image of a person performing ${e.name} with correct posture in a ${input.workoutLocation} environment, professional lighting, fitness-focused composition.`
      ),
      meals: selectedDiet.breakfast.map(meal => 
        `A realistic, high-quality food photograph of ${meal}, healthy presentation, natural lighting, minimal background.`
      ),
    },
    disclaimer: "This plan is AI-generated and intended for general fitness guidance only. Users with medical conditions should consult a certified healthcare professional before starting any new exercise or diet program.",
  };
};

const Index = () => {
  const [plan, setPlan] = useState<FitnessPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSubmit = async (data: UserInput) => {
    setIsLoading(true);
    setUserName(data.name);
    
    try {
      // Simulate AI processing time
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      const generatedPlan = generateMockPlan(data);
      setPlan(generatedPlan);
      toast.success("Your personalized fitness plan is ready!");
    } catch (error) {
      toast.error("Failed to generate plan. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPlan(null);
    setUserName("");
  };

  return (
    <main className="min-h-screen gradient-hero">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {isLoading ? (
          <LoadingState />
        ) : plan ? (
          <FitnessPlanDisplay plan={plan} userName={userName} onReset={handleReset} />
        ) : (
          <>
            <HeroSection />
            <FitnessForm onSubmit={handleSubmit} isLoading={isLoading} />
          </>
        )}
      </div>
    </main>
  );
};

export default Index;
