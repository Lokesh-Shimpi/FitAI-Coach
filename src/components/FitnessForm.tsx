import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UserInput } from "@/types/fitness";
import { Dumbbell, Target, Clock, Heart, Utensils, MapPin } from "lucide-react";

interface FitnessFormProps {
  onSubmit: (data: UserInput) => void;
  isLoading: boolean;
}

const FitnessForm = ({ onSubmit, isLoading }: FitnessFormProps) => {
  const [formData, setFormData] = useState<UserInput>({
    name: "",
    age: 25,
    gender: "",
    height: "",
    weight: "",
    fitnessGoal: "",
    fitnessLevel: "",
    workoutLocation: "",
    dietPreference: "",
    medicalConditions: "",
    stressLevel: "",
    dailyTime: 45,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof UserInput, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Info Section */}
      <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">Personal Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-muted-foreground">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age" className="text-muted-foreground">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="25"
              min={10}
              max={100}
              value={formData.age}
              onChange={(e) => updateField("age", parseInt(e.target.value) || 25)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-muted-foreground">Gender</Label>
            <Select value={formData.gender} onValueChange={(v) => updateField("gender", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="height" className="text-muted-foreground">Height (cm)</Label>
            <Input
              id="height"
              placeholder="175"
              value={formData.height}
              onChange={(e) => updateField("height", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-muted-foreground">Weight (kg)</Label>
            <Input
              id="weight"
              placeholder="70"
              value={formData.weight}
              onChange={(e) => updateField("weight", e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Fitness Goals Section */}
      <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">Fitness Goals</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">Primary Goal</Label>
            <Select value={formData.fitnessGoal} onValueChange={(v) => updateField("fitnessGoal", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fat_loss">Fat Loss</SelectItem>
                <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                <SelectItem value="strength">Strength</SelectItem>
                <SelectItem value="endurance">Endurance</SelectItem>
                <SelectItem value="general_fitness">General Fitness</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-muted-foreground">Fitness Level</Label>
            <Select value={formData.fitnessLevel} onValueChange={(v) => updateField("fitnessLevel", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-muted-foreground">Stress Level</Label>
            <Select value={formData.stressLevel} onValueChange={(v) => updateField("stressLevel", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select stress level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Workout Preferences Section */}
      <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">Workout Preferences</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Workout Location
            </Label>
            <Select value={formData.workoutLocation} onValueChange={(v) => updateField("workoutLocation", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="gym">Gym</SelectItem>
                <SelectItem value="outdoor">Outdoor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Daily Available Time (minutes)
            </Label>
            <Input
              type="number"
              placeholder="45"
              min={15}
              max={180}
              value={formData.dailyTime}
              onChange={(e) => updateField("dailyTime", parseInt(e.target.value) || 45)}
              required
            />
          </div>
        </div>
      </div>

      {/* Diet & Health Section */}
      <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Utensils className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">Diet & Health</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">Dietary Preference</Label>
            <Select value={formData.dietPreference} onValueChange={(v) => updateField("dietPreference", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="keto">Keto</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="conditions" className="text-muted-foreground">Medical Conditions (if any)</Label>
            <Textarea
              id="conditions"
              placeholder="E.g., knee injury, diabetes, allergies..."
              value={formData.medicalConditions}
              onChange={(e) => updateField("medicalConditions", e.target.value)}
              className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        variant="hero" 
        size="xl" 
        className="w-full"
        disabled={isLoading || !formData.name || !formData.gender || !formData.fitnessGoal || !formData.fitnessLevel || !formData.workoutLocation || !formData.dietPreference}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Generating Your Plan...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5" />
            Generate My Fitness Plan
          </span>
        )}
      </Button>
    </form>
  );
};

export default FitnessForm;
