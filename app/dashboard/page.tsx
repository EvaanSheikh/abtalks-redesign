import studentData from "@/data/student.json";
import challengeData from "@/data/challenge.json";
import achievementsData from "@/data/achievements.json";
import leaderboardData from "@/data/leaderboard.json";
import reflectionsData from "@/data/reflection.json";
import FadeUp from "@/components/animations/FadeUp";

import type { Student } from "@/types/Student";
import type { Challenge } from "@/types/Challenge";
import type { Achievement } from "@/types/Achievement";
import type { LeaderboardEntry } from "@/types/LeaderboardEntry";
import type { Reflection } from "@/types/Reflection";

import GreetingHeader from "@/components/dashboard/GreetingHeader";
import TodayChallengeCard from "@/components/dashboard/TodayChallengeCard";
import CurrentStreakCard from "@/components/dashboard/CurrentStreakCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import AchievementGrid from "@/components/dashboard/AchievementGrid";
import WeeklyActivity from "@/components/dashboard/WeeklyActivity";
import LeaderboardCard from "@/components/dashboard/LeaderboardCard";
import ReflectionTimeline from "@/components/dashboard/ReflectionTimeline";
import QuickActionGrid from "@/components/dashboard/QuickActionGrid";
import MotivationCard from "@/components/dashboard/MotivationCard";

const student = studentData as Student;
const challenge = challengeData as Challenge;
const achievements = achievementsData as Achievement[];
const leaderboard = leaderboardData as LeaderboardEntry[];
const reflections = reflectionsData as Reflection[];

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-10">

        <FadeUp>
  <GreetingHeader student={student} />
</FadeUp>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FadeUp delay={0.05}>
  <TodayChallengeCard
    challenge={challenge}
    completedDays={student.completedDays}
    totalDays={student.totalDays}
  />
</FadeUp>
          </div>

          <FadeUp delay={0.1}>
  <CurrentStreakCard student={student} />
</FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <FadeUp delay={0.15}>
  <ProgressCard student={student} />
</FadeUp>

          <FadeUp delay={0.2}>
  <WeeklyActivity
    activity={student.weeklyActivity}
  />
</FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <FadeUp delay={0.25}>
  <AchievementGrid
    achievements={achievements}
  />
</FadeUp>

          <FadeUp delay={0.3}>
  <LeaderboardCard
    leaderboard={leaderboard}
    currentUserId={student.id}
  />
</FadeUp>
        </div>

        <FadeUp delay={0.35}>
  <ReflectionTimeline
    reflections={reflections}
  />
</FadeUp>

        <div className="grid grid-cols-1 8 xl:grid-cols-2">
          <FadeUp delay={0.4}>
  <QuickActionGrid />
</FadeUp>

          <FadeUp delay={0.45}>
  <MotivationCard student={student} />
</FadeUp>
        </div>

      </div>
    </main>
  );
}