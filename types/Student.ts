export interface WeeklyActivityDay {
  day: string;
  status: "completed" | "missed" | "recovery" | "today";
}

export interface Student {
  id: string;

  name: string;
  avatar: string;
  track: string;

  level: number;
  xp: number;

  currentStreak: number;
  longestStreak: number;

  completedDays: number;
  totalDays: number;

  rank: number;

  recoveryAvailable: boolean;

  joinedAt: string;

  weeklyActivity: WeeklyActivityDay[];
}