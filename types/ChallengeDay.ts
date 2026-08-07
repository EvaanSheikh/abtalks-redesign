export interface ChallengeDay {
  day: number;
  title: string;
  description: string;
  expectedOutput: string;
  acceptanceCriteria: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  estimatedEffort: "Low" | "Medium" | "High";
  technologies: string[];
  learningObjectives: string[];
  resources: {
    title: string;
    type: "Official Docs" | "Reference" | "Starter Template" | "Design Inspiration";
    url: string;
  }[];
}