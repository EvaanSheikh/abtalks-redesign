export interface Challenge {
  day: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  technologies: string[];
  resources: {
    title: string;
    url: string;
  }[];
}