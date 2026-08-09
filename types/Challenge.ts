export interface Challenge {
  day: number;
  title: string;
  description: string;
  expectedOutput: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  estimatedEffort: string;
  progress: number;

  technologies: string[];

  learningObjectives: string[];

  acceptanceCriteria: string[];

  resources: {
    title: string;
    type: string;
    url: string;
  }[];

  checklist: {
    id: number;
    title: string;
    completed: boolean;
  }[];

  submission: {
    githubRepository: string;
    githubCommit: string;
    linkedinPost: string;
    reflection: string;
  };

  success: {
    title: string;
    message: string;
    streakReward: string;
  };

  recovery: {
    enabled: boolean;
    missedDays: number;
    message: string;
  };
}