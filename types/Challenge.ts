export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Challenge {
  id: string;
  day: number;
  title: string;
  difficulty: Difficulty;
  estimatedTime: number;
  technologies: string[];
}