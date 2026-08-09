export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  isCurrentUser: boolean;
}